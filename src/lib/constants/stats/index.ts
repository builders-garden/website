import { MonthlyStatsSnapshot, StatsChartConfig } from "@/types/stats";
import { farvilleStats } from "./farville.stats";

// Chart configurations for different projects
export const chartConfigs: Record<string, StatsChartConfig> = {
  farville: {
    title: "Farville Miniapp Stats",
    description: "Monthly performance data from Farcaster",
    metrics: [
      {
        key: "opens",
        label: "Opens",
        color: "hsl(var(--chart-1))",
        visible: true,
      },
      {
        key: "users",
        label: "Users",
        color: "hsl(var(--chart-2))",
        visible: true,
      },
      {
        key: "transactions",
        label: "Transactions",
        color: "hsl(var(--chart-3))",
        visible: true,
      },
    ],
    dataRange: 12, // Show last 12 months
    trendPeriod: 90, // 3 months for trend calculation
  },
};
// Main stats registry - add new projects here
export const projectStats: Record<string, MonthlyStatsSnapshot> = {
  farville: farvilleStats,
  // Add more projects as you process their data
  // example: exampleStats,
};

// Helper function to get stats for a project
export function getProjectStats(slug: string): MonthlyStatsSnapshot | null {
  return projectStats[slug] || null;
}

// Helper function to get chart config for a project
export function getChartConfig(slug: string): StatsChartConfig | null {
  return chartConfigs[slug] || null;
}
