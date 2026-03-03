"use client";

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { salesData } from "@/data/salesData";
import { formatCurrency } from "@/lib/utils";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export function YearCompareChart() {
  const combined = MONTHS.map((month, i) => ({
    month,
    "2024": salesData[2024].monthly[i].revenue,
    "2023": salesData[2023].monthly[i].revenue,
    "2022": salesData[2022].monthly[i].revenue,
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-stone-200 rounded-xl p-3 shadow-lg text-xs">
          <p className="font-display font-semibold text-stone-700 mb-2">{label}</p>
          {payload.map((entry: any) => (
            <div key={entry.name} className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
              <span className="text-stone-500">{entry.name}:</span>
              <span className="font-mono font-medium text-stone-800">{formatCurrency(entry.value)}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={combined} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="4 4" stroke="#e8e3da" />
        <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: "DM Mono" }} tickLine={false} axisLine={false} />
        <YAxis tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 11, fontFamily: "DM Mono" }} tickLine={false} axisLine={false} width={55} />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ fontSize: "11px", fontFamily: "DM Mono" }} />
        <Line type="monotone" dataKey="2024" stroke="#e8891a" strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
        <Line type="monotone" dataKey="2023" stroke="#3b82f6" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
        <Line type="monotone" dataKey="2022" stroke="#a8a29e" strokeWidth={1.5} strokeDasharray="5 3" dot={false} activeDot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
