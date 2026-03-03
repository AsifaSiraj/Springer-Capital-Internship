import { cn } from "@/lib/utils";

export function Divider({ className }: { className?: string }) {
  return <hr className={cn("border-stone-200", className)} />;
}
