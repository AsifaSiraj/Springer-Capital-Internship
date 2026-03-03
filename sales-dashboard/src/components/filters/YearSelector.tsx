"use client";

import { YEARS } from "@/data/salesData";
import type { Year } from "@/types";
import { cn } from "@/lib/utils";

interface YearSelectorProps {
  selected: Year;
  onChange: (year: Year) => void;
}

export function YearSelector({ selected, onChange }: YearSelectorProps) {
  return (
    <div className="flex items-center gap-1 bg-stone-100 rounded-xl p-1">
      {YEARS.map((year) => (
        <button
          key={year}
          onClick={() => onChange(year)}
          className={cn(
            "px-4 py-1.5 rounded-lg text-sm font-mono font-medium transition-all duration-150 cursor-pointer",
            selected === year
              ? "bg-white text-stone-900 shadow-sm"
              : "text-stone-500 hover:text-stone-700"
          )}
        >
          {year}
        </button>
      ))}
    </div>
  );
}
