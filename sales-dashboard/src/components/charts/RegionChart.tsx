"use client";

import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from "recharts";
import type { RegionSales } from "@/types";
import { formatCurrency } from "@/lib/utils";

interface RegionChartProps {
  data: RegionSales[];
}

const COLORS = ["#e8891a", "#3b82f6", "#10b981", "#8b5cf6"];

export function RegionChart({ data }: RegionChartProps) {
  return (
    <div className="space-y-3">
      {data.map((region, i) => (
        <div key={region.region} className="flex items-center gap-3">
          <span className="text-xs font-mono text-stone-500 w-14 shrink-0">{region.region}</span>
          <div className="flex-1 h-5 bg-stone-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${region.share}%`, backgroundColor: COLORS[i] }}
            />
          </div>
          <div className="text-right shrink-0">
            <span className="text-xs font-mono font-medium text-stone-700">{formatCurrency(region.revenue)}</span>
            <span className="text-xs font-mono text-stone-400 ml-1">({region.share}%)</span>
          </div>
        </div>
      ))}
    </div>
  );
}
