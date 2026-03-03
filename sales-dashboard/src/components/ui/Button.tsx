import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "active";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "secondary", size = "md", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-150 cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-1",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          size === "sm" && "text-xs px-3 py-1.5",
          size === "md" && "text-sm px-4 py-2",
          size === "lg" && "text-base px-5 py-2.5",
          variant === "primary" && "bg-orange-500 text-white hover:bg-orange-600 shadow-sm",
          variant === "secondary" && "bg-white border border-stone-300 text-stone-800 hover:bg-stone-50",
          variant === "ghost" && "text-stone-500 hover:text-stone-800 hover:bg-stone-100",
          variant === "active" && "bg-orange-500 text-white shadow-sm",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
