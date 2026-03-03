import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "positive" | "negative" | "neutral";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-mono font-medium",
        {
          "bg-[#e8e3da] text-[#574b35]": variant === "default",
          "bg-emerald-50 text-emerald-700 border border-emerald-200":
            variant === "positive",
          "bg-red-50 text-red-700 border border-red-200": variant === "negative",
          "bg-[#fef3e2] text-[#e8891a] border border-orange-200":
            variant === "neutral",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
