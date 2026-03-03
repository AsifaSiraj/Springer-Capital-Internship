export type ChartType = "bar" | "line" | "pie";
export type Year = 2022 | 2023 | 2024;

export interface MonthlySales {
  month: string;
  revenue: number;
  units: number;
  profit: number;
}

export interface CategorySales {
  category: string;
  revenue: number;
  units: number;
  growth: number;
}

export interface RegionSales {
  region: string;
  revenue: number;
  share: number;
}

export interface YearSummary {
  year: Year;
  totalRevenue: number;
  totalUnits: number;
  totalProfit: number;
  topCategory: string;
  growthRate: number;
  monthly: MonthlySales[];
  byCategory: CategorySales[];
  byRegion: RegionSales[];
}

export interface SalesDataStore {
  [key: number]: YearSummary;
}

export interface FilterState {
  selectedYear: Year;
  chartType: ChartType;
  revenueThreshold: number;
  selectedCategory: string | null;
}

export interface KpiCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ComponentType<{ className?: string }>;
  prefix?: string;
  suffix?: string;
}
