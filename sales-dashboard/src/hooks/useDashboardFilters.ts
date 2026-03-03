"use client";

import { useState, useCallback, useMemo } from "react";
import type { FilterState, ChartType, Year } from "@/types";
import { salesData } from "@/data/salesData";

export function useDashboardFilters() {
  const [filters, setFilters] = useState<FilterState>({
    selectedYear: 2024,
    chartType: "bar",
    revenueThreshold: 0,
    selectedCategory: null,
  });

  const setYear = useCallback((year: Year) => {
    setFilters((prev) => ({ ...prev, selectedYear: year }));
  }, []);

  const setChartType = useCallback((chartType: ChartType) => {
    setFilters((prev) => ({ ...prev, chartType }));
  }, []);

  const setRevenueThreshold = useCallback((revenueThreshold: number) => {
    setFilters((prev) => ({ ...prev, revenueThreshold }));
  }, []);

  const setSelectedCategory = useCallback((category: string | null) => {
    setFilters((prev) => ({
      ...prev,
      selectedCategory: prev.selectedCategory === category ? null : category,
    }));
  }, []);

  const currentYearData = useMemo(
    () => salesData[filters.selectedYear],
    [filters.selectedYear]
  );

  const filteredMonthly = useMemo(() => {
    return currentYearData.monthly.filter(
      (m) => m.revenue >= filters.revenueThreshold
    );
  }, [currentYearData, filters.revenueThreshold]);

  const filteredCategories = useMemo(() => {
    return currentYearData.byCategory.filter((c) => {
      const passesThreshold = c.revenue >= filters.revenueThreshold;
      const passesCategory =
        !filters.selectedCategory || c.category === filters.selectedCategory;
      return passesThreshold && passesCategory;
    });
  }, [currentYearData, filters.revenueThreshold, filters.selectedCategory]);

  return {
    filters,
    setYear,
    setChartType,
    setRevenueThreshold,
    setSelectedCategory,
    currentYearData,
    filteredMonthly,
    filteredCategories,
  };
}
