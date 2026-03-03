"use client";

import { DollarSign, Package, TrendingUp, Award } from "lucide-react";
import { useDashboardFilters } from "@/hooks/useDashboardFilters";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { salesData } from "@/data/salesData";

import { KpiCard } from "@/components/ui/KpiCard";
import { Card, CardHeader, CardTitle, CardBody } from "@/components/ui/Card";
import { YearSelector } from "@/components/filters/YearSelector";
import { ChartTypeToggle } from "@/components/filters/ChartTypeToggle";
import { ThresholdInput } from "@/components/filters/ThresholdInput";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { CategoryChart } from "@/components/charts/CategoryPieChart";
import { RegionChart } from "@/components/charts/RegionChart";
import { YearCompareChart } from "@/components/charts/YearCompareChart";

export function DashboardClient() {
  const {
    filters,
    setYear,
    setChartType,
    setRevenueThreshold,
    currentYearData,
    filteredMonthly,
    filteredCategories,
  } = useDashboardFilters();

  const prevYear = (filters.selectedYear - 1) as keyof typeof salesData;
  const prevData = salesData[prevYear];
  const revenueGrowth = prevData
    ? ((currentYearData.totalRevenue - prevData.totalRevenue) / prevData.totalRevenue) * 100
    : 0;
  const unitsGrowth = prevData
    ? ((currentYearData.totalUnits - prevData.totalUnits) / prevData.totalUnits) * 100
    : 0;
  const profitGrowth = prevData
    ? ((currentYearData.totalProfit - prevData.totalProfit) / prevData.totalProfit) * 100
    : 0;

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <header className="sticky top-0 z-30 bg-[#faf8f3]/90 backdrop-blur border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
              <TrendingUp size={14} className="text-white" />
            </div>
            <span className="font-display font-bold text-stone-900 text-lg tracking-tight">
              SalesIQ
            </span>
            <span className="hidden sm:block text-xs font-mono text-stone-400 bg-stone-100 rounded-full px-2.5 py-0.5">
              2022 to 2024
            </span>
          </div>
          <nav className="flex items-center gap-2 text-xs font-mono text-stone-400">
            <span className="text-orange-500 font-medium">Dashboard</span>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <div className="animate-fade-up flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display font-bold text-3xl text-stone-900 tracking-tight">
              Sales Analytics
            </h1>
            <p className="text-stone-500 text-sm mt-1 font-mono">
              Retail performance overview - Superstore dataset
            </p>
          </div>
          <YearSelector selected={filters.selectedYear} onChange={setYear} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            title="Total Revenue"
            value={formatCurrency(currentYearData.totalRevenue)}
            change={revenueGrowth}
            icon={DollarSign}
            delay={0}
          />
          <KpiCard
            title="Units Sold"
            value={formatNumber(currentYearData.totalUnits)}
            change={unitsGrowth}
            icon={Package}
            delay={50}
          />
          <KpiCard
            title="Net Profit"
            value={formatCurrency(currentYearData.totalProfit)}
            change={profitGrowth}
            icon={TrendingUp}
            delay={100}
          />
          <KpiCard
            title="Top Category"
            value={currentYearData.topCategory}
            change={currentYearData.growthRate}
            icon={Award}
            delay={150}
          />
        </div>

        <div className="animate-fade-up stagger-3 flex flex-wrap items-center gap-3">
          <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">Chart:</span>
          <ChartTypeToggle selected={filters.chartType} onChange={setChartType} />
          <ThresholdInput value={filters.revenueThreshold} onChange={setRevenueThreshold} />
          {filters.revenueThreshold > 0 && (
            <span className="text-xs font-mono text-orange-500 bg-orange-50 border border-orange-200 rounded-full px-2.5 py-1">
              Showing months above {formatCurrency(filters.revenueThreshold)}
            </span>
          )}
        </div>

        <Card className="animate-fade-up stagger-4">
          <CardHeader>
            <div>
              <CardTitle>Monthly Revenue and Profit - {filters.selectedYear}</CardTitle>
              <p className="text-xs font-mono text-stone-400 mt-1">
                {filteredMonthly.length} of 12 months shown
              </p>
            </div>
          </CardHeader>
          <CardBody>
            <div className="h-72">
              <RevenueChart
                data={filteredMonthly}
                chartType={filters.chartType}
                year={filters.selectedYear}
              />
            </div>
          </CardBody>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="animate-fade-up stagger-5">
            <CardHeader>
              <div>
                <CardTitle>Category Breakdown</CardTitle>
                <p className="text-xs font-mono text-stone-400 mt-1">Revenue by product category</p>
              </div>
            </CardHeader>
            <CardBody>
              <div className="h-60">
                <CategoryChart data={filteredCategories} chartType={filters.chartType} />
              </div>
            </CardBody>
          </Card>

          <Card className="animate-fade-up stagger-5">
            <CardHeader>
              <div>
                <CardTitle>Regional Distribution</CardTitle>
                <p className="text-xs font-mono text-stone-400 mt-1">Revenue share by region</p>
              </div>
            </CardHeader>
            <CardBody>
              <div className="pt-2">
                <RegionChart data={currentYearData.byRegion} />
              </div>
            </CardBody>
          </Card>
        </div>

        <Card className="animate-fade-up stagger-6">
          <CardHeader>
            <div>
              <CardTitle>Year-over-Year Comparison</CardTitle>
              <p className="text-xs font-mono text-stone-400 mt-1">Monthly revenue trend 2022, 2023, 2024</p>
            </div>
          </CardHeader>
          <CardBody>
            <div className="h-72">
              <YearCompareChart />
            </div>
          </CardBody>
        </Card>

        <Card className="animate-fade-up">
          <CardHeader>
            <CardTitle>Sales Detail by Category - {filters.selectedYear}</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-100">
                    {["Category", "Revenue", "Units", "Growth"].map((h) => (
                      <th key={h} className="text-left py-2 px-3 text-xs font-mono text-stone-400 uppercase tracking-widest font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredCategories.map((row) => (
                    <tr key={row.category} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                      <td className="py-3 px-3 font-medium text-stone-800">{row.category}</td>
                      <td className="py-3 px-3 font-mono text-stone-700">{formatCurrency(row.revenue)}</td>
                      <td className="py-3 px-3 font-mono text-stone-500">{formatNumber(row.units)}</td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 text-xs font-mono bg-emerald-50 text-emerald-700 rounded-full px-2 py-0.5">
                          +{row.growth}%
                        </span>
                      </td>
                    </tr>
                  ))}
                  {filteredCategories.length === 0 && (
                    <tr>
                      <td colSpan={4} className="py-8 text-center text-stone-400 font-mono text-xs">
                        No categories match the current threshold filter
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>

        <footer className="border-t border-stone-200 pt-6 pb-4 flex items-center justify-between">
          <p className="text-xs font-mono text-stone-400">
            Data sourced from Kaggle Superstore Sales Dataset (2022-2024) - Mock values
          </p>
          <p className="text-xs font-mono text-stone-300">SalesIQ v1.0</p>
        </footer>
      </main>
    </div>
  );
}
