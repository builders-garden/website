// Types for miniapp statistics data

export interface RawMiniappDataset {
  dateRange: {
    startDate: string;
    endDate: string;
  };
  restrictions: Array<{
    dimension: string;
    values: string[];
  }>;
  totals: Array<{
    name: string;
    value: number;
  }>;
  breakdown: Array<{
    slices: Array<{
      dimension: string;
      values: string[];
    }>;
    measures: Array<{
      name: string;
      value: number;
    }>;
  }>;
}

// Processed stats data for chart display
export interface ProcessedStatsData {
  date: string;
  opens?: number;
  users?: number;
  transactions?: number;
  // Add other metrics as needed
  [key: string]: string | number | undefined;
}

// Monthly snapshot format returned by your API
export interface MonthlyStatsSnapshot {
  projectSlug: string;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  monthlyData: ProcessedStatsData[];
  totalMetrics: {
    totalOpens: number;
    totalUsers: number;
    totalTransactions: number;
    averageDaily: {
      opens: number;
      users: number;
      transactions: number;
    };
  };
  trend: {
    opens: {
      percentage: number;
      isPositive: boolean;
      period: string;
    };
    users: {
      percentage: number;
      isPositive: boolean;
      period: string;
    };
  };
}

// Chart configuration
export interface ChartMetric {
  key: string;
  label: string;
  color: string;
  visible: boolean;
}

export interface StatsChartConfig {
  title: string;
  description?: string;
  metrics: ChartMetric[];
  dataRange: number; // Number of data points to show
  trendPeriod: number; // Days for trend calculation
}
