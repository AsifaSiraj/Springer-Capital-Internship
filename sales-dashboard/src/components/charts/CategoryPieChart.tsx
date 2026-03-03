"use client";

import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import type { CategorySales, ChartType } from "@/types";
import { formatCurrency } from "@/lib/utils";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from "recharts";

const COLORS = ["#e8891a", "#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"];

interface CategoryChartProps {
  data: CategorySales[];
  chartType: ChartType;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const d = payload[0];
    return (
      <div className="bg-white border border-stone-200 rounded-xl p-3 shadow-lg text-xs">
        <p className="font-display font-semibold text-stone-700 mb-1">{d.name || d.payload?.category}</p>
        <p className="font-mono text-stone-600">
          Revenue: <span className="font-semibold text-stone-800">{formatCurrency(d.value || d.payload?.revenue)}</span>
        </p>
        {d.payload?.growth !== undefined && (
          <p className="font-mono text-stone-500 mt-0.5">Growth: +{d.payload.growth}%</p>
        )}
      </div>
    );
  }
  return null;
};

export function CategoryChart({ data, chartType }: CategoryChartProps) {
  if (chartType === "pie" || chartType === "bar") {
    if (chartType === "pie") {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              dataKey="revenue"
              nameKey="category"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              formatter={(v) => <span style={{ fontSize: 11, fontFamily: "DM Mono", color: "#574b35" }}>{v}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      );
    }

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="#e8e3da" horizontal={false} />
          <XAxis type="number" tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 10, fontFamily: "DM Mono" }} tickLine={false} axisLine={false} />
          <YAxis type="category" dataKey="category" tick={{ fontSize: 11, fontFamily: "DM Mono" }} tickLine={false} axisLine={false} width={85} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="revenue" radius={[0, 4, 4, 0]} maxBarSize={28}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  // line fallback for category = bar
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="4 4" stroke="#e8e3da" horizontal={false} />
        <XAxis type="number" tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 10, fontFamily: "DM Mono" }} tickLine={false} axisLine={false} />
        <YAxis type="category" dataKey="category" tick={{ fontSize: 11, fontFamily: "DM Mono" }} tickLine={false} axisLine={false} width={85} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="revenue" radius={[0, 4, 4, 0]} maxBarSize={28}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
