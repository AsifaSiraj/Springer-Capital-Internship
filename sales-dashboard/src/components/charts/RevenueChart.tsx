"use client";

import {
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import type { ChartType, MonthlySales } from "@/types";
import { formatCurrency } from "@/lib/utils";

interface RevenueChartProps {
  data: MonthlySales[];
  chartType: ChartType;
  year: number;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-stone-200 rounded-xl p-3 shadow-lg text-xs">
        <p className="font-display font-semibold text-stone-700 mb-2">{label}</p>
        {payload.map((entry: any) => (
          <div key={entry.name} className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
            <span className="text-stone-500 capitalize">{entry.name}:</span>
            <span className="font-mono font-medium text-stone-800">
              {entry.name === "units" ? entry.value.toLocaleString() : formatCurrency(entry.value)}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function RevenueChart({ data, chartType, year }: RevenueChartProps) {
  const commonProps = {
    data,
    margin: { top: 5, right: 10, left: 0, bottom: 5 },
  };

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="4 4" stroke="#e8e3da" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: "DM Mono" }} tickLine={false} axisLine={false} />
            <YAxis tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 11, fontFamily: "DM Mono" }} tickLine={false} axisLine={false} width={55} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: "11px", fontFamily: "DM Mono" }} />
            <Line type="monotone" dataKey="revenue" stroke="#e8891a" strokeWidth={2.5} dot={{ fill: "#e8891a", r: 3 }} activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} strokeDasharray="5 3" dot={false} />
          </LineChart>
        );
      case "pie":
        return null; // handled separately
      default: // bar
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="4 4" stroke="#e8e3da" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: "DM Mono" }} tickLine={false} axisLine={false} />
            <YAxis tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 11, fontFamily: "DM Mono" }} tickLine={false} axisLine={false} width={55} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: "11px", fontFamily: "DM Mono" }} />
            <Bar dataKey="revenue" fill="#e8891a" radius={[4, 4, 0, 0]} maxBarSize={40} />
            <Bar dataKey="profit" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={40} />
          </BarChart>
        );
    }
  };

  if (chartType === "pie") {
    return (
      <div className="flex items-center justify-center h-full text-stone-400 text-sm font-mono">
        Pie chart is rendered in the Category Breakdown section below
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      {renderChart() as React.ReactElement}
    </ResponsiveContainer>
  );
}
