import {
  RawMiniappDataset,
  MonthlyStatsSnapshot,
  ProcessedStatsData,
} from "@/types/stats";
import { format, parseISO, startOfMonth } from "date-fns";

/**
 * Utility to process raw Farcaster miniapp dataset into monthly snapshots
 * This simulates the functionality of your private API
 */

export function processRawFarcasterData(
  rawData: RawMiniappDataset,
  projectSlug: string
): MonthlyStatsSnapshot {
  // Group breakdown data by month
  const monthlyGroups = new Map<string, typeof rawData.breakdown>();

  rawData.breakdown.forEach((entry) => {
    const dateSlice = entry.slices.find((s) => s.dimension === "date");
    const dateStr = dateSlice?.values?.[0];

    if (dateStr) {
      try {
        const date = parseISO(dateStr);
        const monthKey = format(startOfMonth(date), "yyyy-MM");

        if (!monthlyGroups.has(monthKey)) {
          monthlyGroups.set(monthKey, []);
        }
        monthlyGroups.get(monthKey)!.push(entry);
      } catch (error) {
        console.warn(`Invalid date format: ${dateStr}`);
      }
    }
  });

  // Process each month's data
  const monthlyData: ProcessedStatsData[] = [];

  for (const [monthKey, entries] of monthlyGroups) {
    const monthStats: ProcessedStatsData = {
      date: monthKey,
      opens: 0,
      users: 0,
      transactions: 0,
    };

    entries.forEach((entry) => {
      const opens = getMeasureValue(entry, "miniapp_opens") || 0;
      const users = getMeasureValue(entry, "miniapp_users_w_open") || 0;
      const transactions = getMeasureValue(entry, "miniapp_transactions") || 0;

      monthStats.opens! += opens;
      monthStats.users! += users;
      monthStats.transactions! += transactions;
    });

    monthlyData.push(monthStats);
  }

  // Sort by date
  monthlyData.sort((a, b) => a.date.localeCompare(b.date));

  // Calculate totals from the processed data
  const totalMetrics = {
    totalOpens: monthlyData.reduce((sum, m) => sum + (m.opens || 0), 0),
    totalUsers: Math.max(...monthlyData.map((m) => m.users || 0)), // Max unique users
    totalTransactions: monthlyData.reduce(
      (sum, m) => sum + (m.transactions || 0),
      0
    ),
    averageDaily: {
      opens: Math.round(
        monthlyData.reduce((sum, m) => sum + (m.opens || 0), 0) / 365
      ),
      users: Math.round(Math.max(...monthlyData.map((m) => m.users || 0)) / 30),
      transactions: Math.round(
        monthlyData.reduce((sum, m) => sum + (m.transactions || 0), 0) / 365
      ),
    },
  };

  // Calculate trends (3-month comparison)
  const trend = calculateTrends(monthlyData);

  return {
    projectSlug,
    dateRange: rawData.dateRange,
    monthlyData,
    totalMetrics,
    trend,
  };
}

function getMeasureValue(
  entry: RawMiniappDataset["breakdown"][number],
  measureName: string
): number | undefined {
  return entry.measures.find((m) => m.name === measureName)?.value;
}

function calculateTrends(data: ProcessedStatsData[]) {
  const getRecentVsPrevious = (
    metric: keyof ProcessedStatsData,
    months: number = 3
  ) => {
    if (data.length < months * 2) {
      return { percentage: 0, isPositive: true, period: "3 months" };
    }

    const recent = data.slice(-months);
    const previous = data.slice(-months * 2, -months);

    const recentTotal = recent.reduce(
      (sum, d) => sum + (Number(d[metric]) || 0),
      0
    );
    const previousTotal = previous.reduce(
      (sum, d) => sum + (Number(d[metric]) || 0),
      0
    );

    if (previousTotal === 0) {
      return { percentage: 0, isPositive: true, period: "3 months" };
    }

    const change = ((recentTotal - previousTotal) / previousTotal) * 100;
    return {
      percentage: Math.abs(change),
      isPositive: change >= 0,
      period: "3 months",
    };
  };

  return {
    opens: getRecentVsPrevious("opens"),
    users: getRecentVsPrevious("users"),
  };
}

/**
 * Helper function to format the processed data for easy copy-paste into constants
 */
export function formatForConstants(
  processedData: MonthlyStatsSnapshot
): string {
  return `export const ${
    processedData.projectSlug
  }Stats: MonthlyStatsSnapshot = ${JSON.stringify(processedData, null, 2)};`;
}

/**
 * Formats a number with 'k' for thousands and 'M' for millions
 * @param value - The number to format
 * @param decimals - Number of decimal places to show (default: 2)
 * @returns Formatted string with appropriate suffix
 *
 * Examples:
 * formatNumberWithSuffix(1234) => "1.23k"
 * formatNumberWithSuffix(1234567) => "1.23M"
 * formatNumberWithSuffix(123, 1) => "123.0"
 */
export const formatNumberWithSuffix = (value: number, decimals = 2): string => {
  if (value === null || value === undefined || isNaN(value)) {
    return "0";
  }

  // For values less than 1000, just return the number with fixed decimals
  if (Math.abs(value) < 1000) {
    return value.toFixed(0);
  }

  // For thousands (k)
  if (Math.abs(value) < 1000000) {
    return (value / 1000).toFixed(decimals) + "k";
  }

  // For millions (M)
  return (value / 1000000).toFixed(decimals) + "M";
};
