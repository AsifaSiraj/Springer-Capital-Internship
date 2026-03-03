"use client";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  delay?: number;
}

export function KpiCard({ title, value, change, icon: Icon, delay = 0 }: KpiCardProps) {
  const isPositive = change >= 0;
  return (
    <div
      className="animate-fade-up bg-white rounded-2xl border border-stone-200 p-5 flex flex-col gap-3 hover:shadow-md hover:shadow-stone-200/60 transition-shadow duration-200"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">{title}</span>
        <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center">
          <Icon className="text-orange-500" size={16} />
        </div>
      </div>
      <div className="flex items-end justify-between gap-2">
        <span className="font-display font-bold text-2xl text-stone-900 leading-none">{value}</span>
        <span
          className={cn(
            "inline-flex items-center gap-1 text-xs font-mono font-medium rounded-full px-2 py-0.5 mb-0.5",
            isPositive ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"
          )}
        >
          {isPositive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
          {isPositive ? "+" : ""}{change.toFixed(1)}%
        </span>
      </div>
      <div className="h-1 w-full bg-stone-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-400 rounded-full"
          style={{ width: `${Math.min(100, Math.abs(change) * 5)}%` }}
        />
      </div>
    </div>
  );
}
