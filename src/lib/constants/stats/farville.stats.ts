import { MonthlyStatsSnapshot } from "@/types/stats";

export const farvilleStats: MonthlyStatsSnapshot = {
  projectSlug: "farville",
  dateRange: {
    startDate: "2024-08-13",
    endDate: "2025-08-14",
  },
  monthlyData: [
    {
      date: "2025-02",
      opens: 34090,
      users: 1376,
      transactions: 0,
    },
    {
      date: "2025-03",
      opens: 2529165,
      users: 70056,
      transactions: 1418,
    },
    {
      date: "2025-04",
      opens: 4274427,
      users: 88565,
      transactions: 803,
    },
    {
      date: "2025-05",
      opens: 5076000,
      users: 110919,
      transactions: 1318,
    },
    {
      date: "2025-06",
      opens: 2598545,
      users: 83317,
      transactions: 917,
    },
    {
      date: "2025-07",
      opens: 367815,
      users: 53718,
      transactions: 392,
    },
  ],
  totalMetrics: {
    totalOpens: 15026495,
    totalUsers: 110919,
    totalTransactions: 5009,
    averageDaily: {
      opens: 41168,
      users: 3697,
      transactions: 14,
    },
  },
  trend: {
    opens: {
      percentage: 73.79697046834605,
      isPositive: false,
      period: "3 months",
    },
    users: {
      percentage: 41.656896935519775,
      isPositive: false,
      period: "3 months",
    },
  },
};
