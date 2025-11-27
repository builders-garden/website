"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { format, parseISO } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp } from "lucide-react";
import { getProjectStats, getChartConfig } from "@/lib/constants/stats";
import { ProcessedStatsData } from "@/types/stats";
import { formatNumberWithSuffix } from "@/lib/utils/stats-processor";

interface ProjectStatsChartProps {
  projectSlug: string;
}

const formatTickDate = (dateStr: string) => {
  try {
    // Handle YYYY-MM format for monthly data
    if (dateStr.match(/^\d{4}-\d{2}$/)) {
      return format(parseISO(`${dateStr}-01`), "MMM yyyy");
    }
    // Handle ISO date strings
    return format(parseISO(dateStr), "MMM d");
  } catch {
    return dateStr;
  }
};

const calculateTrend = (
  data: ProcessedStatsData[],
  metric: string,
  periodMonths: number = 3
) => {
  if (data.length < periodMonths * 2) {
    return {
      percentage: 0,
      isPositive: true,
      period: `${periodMonths} months`,
      hasEnoughData: false,
    };
  }

  // Get the last N months and the N months before that for comparison
  const recentPeriod = data.slice(-periodMonths);
  const previousPeriod = data.slice(-periodMonths * 2, -periodMonths);

  const recentTotal = recentPeriod.reduce(
    (sum, item) => sum + (Number(item[metric]) || 0),
    0
  );
  const previousTotal = previousPeriod.reduce(
    (sum, item) => sum + (Number(item[metric]) || 0),
    0
  );

  if (previousTotal === 0) {
    return {
      percentage: 0,
      isPositive: true,
      period: `${periodMonths} months`,
      hasEnoughData: true,
    };
  }

  const percentageChange =
    ((recentTotal - previousTotal) / previousTotal) * 100;

  return {
    percentage: Math.abs(percentageChange),
    isPositive: percentageChange >= 0,
    period: `${periodMonths} months`,
    hasEnoughData: true,
  };
};

export default function ProjectStatsChart({
  projectSlug,
}: ProjectStatsChartProps) {
  const statsData = getProjectStats(projectSlug);
  const chartConfig = getChartConfig(projectSlug);

  if (!statsData || !chartConfig) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Stats Not Available</CardTitle>
          <CardDescription>
            No stats data found for project: {projectSlug}
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const { monthlyData, dateRange } = statsData;
  const visibleMetrics = chartConfig.metrics.filter((m) => m.visible);

  // Sort data by date and take the specified range
  const sortedData = [...monthlyData].sort((a, b) => {
    const dateA = new Date(a.date + "-01");
    const dateB = new Date(b.date + "-01");
    return dateA.getTime() - dateB.getTime();
  });

  const chartData = sortedData.slice(-chartConfig.dataRange);

  // Build dynamic chart config
  const dynamicChartConfig = visibleMetrics.reduce((config, metric) => {
    config[metric.key] = {
      label: metric.label,
      color: metric.color,
    };
    return config;
  }, {} as ChartConfig);

  const dateRangeLabel = () => {
    try {
      const start = parseISO(dateRange.startDate);
      const end = parseISO(dateRange.endDate);
      return `${format(start, "MMM d, yyyy")} - ${format(end, "MMM d, yyyy")}`;
    } catch {
      return `${dateRange.startDate} - ${dateRange.endDate}`;
    }
  };

  // Calculate trend for the primary metric (usually "opens")
  const primaryMetric = visibleMetrics[0]?.key || "opens";
  const trend = calculateTrend(
    sortedData,
    primaryMetric,
    Math.floor(chartConfig.trendPeriod / 30)
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>{chartConfig.title}</CardTitle>
        <CardDescription>
          {chartConfig.description && `${chartConfig.description} • `}
          {dateRangeLabel()}
        </CardDescription>
      </CardHeader>
      <CardContent className="font-mono">
        <ChartContainer config={dynamicChartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => formatTickDate(String(value))}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            {visibleMetrics.map((metric) => (
              <Bar
                key={metric.key}
                dataKey={metric.key}
                fill={`var(--color-${metric.key})`}
                radius={4}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={10}
                  formatter={(value: number) =>
                    formatNumberWithSuffix(value, 2)
                  }
                />
              </Bar>
            ))}
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {trend.hasEnoughData && (
          <div className="flex gap-2 leading-none font-medium">
            <Badge
              variant="outline"
              className={`border-none ${
                trend.isPositive
                  ? "text-green-500 bg-green-500/10"
                  : "text-red-500 bg-red-500/10"
              }`}
            >
              {trend.isPositive ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span>
                Trending {trend.isPositive ? "up" : "down"} by{" "}
                {trend.percentage.toFixed(1)}% over {trend.period}
              </span>
            </Badge>
          </div>
        )}
        <div className="text-muted-foreground leading-none">
          Showing{" "}
          {visibleMetrics.map((m) => m.label.toLowerCase()).join(" and ")} for
          the last {chartConfig.dataRange} months
        </div>
      </CardFooter>
    </Card>
  );
}
