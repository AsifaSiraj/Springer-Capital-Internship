"use client";

import { BarChart2, LineChart, PieChart } from "lucide-react";
import type { ChartType } from "@/types";
import { cn } from "@/lib/utils";

interface ChartTypeToggleProps {
  selected: ChartType;
  onChange: (type: ChartType) => void;
}

const options: { type: ChartType; icon: React.ComponentType<{ size?: number }>; label: string }[] = [
  { type: "bar", icon: BarChart2, label: "Bar" },
  { type: "line", icon: LineChart, label: "Line" },
  { type: "pie", icon: PieChart, label: "Pie" },
];

export function ChartTypeToggle({ selected, onChange }: ChartTypeToggleProps) {
  return (
    <div className="flex items-center gap-1 bg-stone-100 rounded-xl p-1">
      {options.map(({ type, icon: Icon, label }) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          title={label}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-150 cursor-pointer",
            selected === type
              ? "bg-orange-500 text-white shadow-sm"
              : "text-stone-500 hover:text-stone-700"
          )}
        >
          <Icon size={13} />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}
