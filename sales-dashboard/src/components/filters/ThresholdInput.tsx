"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface ThresholdInputProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
}

export function ThresholdInput({ value, onChange, max = 500000 }: ThresholdInputProps) {
  const [inputVal, setInputVal] = useState(String(value));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setInputVal(raw);
    const parsed = parseInt(raw || "0", 10);
    if (!isNaN(parsed)) onChange(parsed);
  };

  return (
    <div className="flex items-center gap-3 bg-white border border-stone-200 rounded-xl px-4 py-2">
      <SlidersHorizontal size={14} className="text-stone-400 shrink-0" />
      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-mono text-stone-400 uppercase tracking-widest leading-none">Min Revenue</span>
        <div className="flex items-center gap-1">
          <span className="text-xs font-mono text-orange-500">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={handleChange}
            placeholder="0"
            className="w-24 text-sm font-mono font-medium text-stone-800 bg-transparent outline-none placeholder:text-stone-300"
          />
        </div>
      </div>
      {value > 0 && (
        <button
          onClick={() => { setInputVal("0"); onChange(0); }}
          className="text-xs text-stone-400 hover:text-red-500 font-mono transition-colors cursor-pointer"
        >
          Clear
        </button>
      )}
    </div>
  );
}
