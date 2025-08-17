import { NextRequest, NextResponse } from "next/server";
import {
  processRawFarcasterData,
  formatForConstants,
} from "@/lib/utils/stats-processor";
import { RawMiniappDataset } from "@/types/stats";
import { env } from "@/lib/env";
import { z } from "zod";

const processFarcasterStatsSchema = z.object({
  rawData: z.any().refine((data) => {
    if (!data || typeof data !== "object") {
      return false;
    }
    return true;
  }),
  projectSlug: z
    .string()
    .min(1)
    .refine((slug) => {
      if (!/^[a-z0-9-]+$/.test(slug)) {
        return false;
      }
      return true;
    }),
  outputFormat: z.enum(["json", "constants"]).optional().default("json"),
});

export async function POST(request: NextRequest) {
  try {
    const auth = request.headers.get("x-auth");
    if (auth !== env.STATS_PROCESSOR_AUTH) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await request.json();
    const parsedBody = processFarcasterStatsSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        { error: "Invalid request body", status: "error" },
        { status: 400 }
      );
    }

    const { rawData, projectSlug, outputFormat } = parsedBody.data;

    // Validate raw data structure
    if (!validateRawDataStructure(rawData)) {
      return NextResponse.json(
        {
          error:
            "Invalid rawData structure. Expected Farcaster miniapp dataset format",
          status: "error",
        },
        { status: 400 }
      );
    }

    // Process the raw data
    const processedStats = processRawFarcasterData(rawData, projectSlug);

    // Return response based on requested format
    if (outputFormat === "constants") {
      // Return formatted TypeScript constants code
      const constantsCode = formatForConstants(processedStats);
      return NextResponse.json({
        status: "success",
        data: processedStats,
        constantsCode,
        message:
          "Data processed successfully. Copy the constantsCode to your stats.ts file.",
      });
    }

    // Default: return JSON data
    return NextResponse.json({
      status: "success",
      data: processedStats,
      message: "Data processed successfully",
    });
  } catch (error) {
    console.error("Error processing stats data:", error);

    // Handle specific error types
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          error: "Invalid JSON format in request body",
          status: "error",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: "Internal server error while processing stats data",
        status: "error",
      },
      { status: 500 }
    );
  }
}

/**
 * Validate that the raw data has the expected Farcaster dataset structure
 */
function validateRawDataStructure(data: any): data is RawMiniappDataset {
  if (!data || typeof data !== "object") {
    return false;
  }

  // Check required top-level properties
  const requiredProps = ["dateRange", "breakdown"];
  for (const prop of requiredProps) {
    if (!(prop in data)) {
      return false;
    }
  }

  // Validate dateRange structure
  if (
    !data.dateRange ||
    typeof data.dateRange !== "object" ||
    !data.dateRange.startDate ||
    !data.dateRange.endDate
  ) {
    return false;
  }

  // Validate breakdown array
  if (!Array.isArray(data.breakdown)) {
    return false;
  }

  // Validate breakdown entries (check first few entries)
  const sampleSize = Math.min(3, data.breakdown.length);
  for (let i = 0; i < sampleSize; i++) {
    const entry = data.breakdown[i];
    if (
      !entry ||
      !Array.isArray(entry.slices) ||
      !Array.isArray(entry.measures)
    ) {
      return false;
    }
  }

  return true;
}
