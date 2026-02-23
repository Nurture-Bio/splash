import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils.ts";

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1.5 rounded-full",
    "font-sans text-xs font-medium",
    "uppercase tracking-[0.16em] px-3 py-1",
  ],
  {
    variants: {
      tone: {
        stealth: [
          "border border-[--color-cyan-dim]",
          "text-[--color-cyan]",
          "bg-[--color-cyan-wash]",
        ],
        violet: [
          "border border-[--color-violet-dim]",
          "text-[--color-violet]",
          "bg-[--color-violet-wash]",
        ],
        neutral: [
          "border border-[--color-line-2]",
          "text-[--color-fg-3]",
          "bg-transparent",
        ],
      },
    },
    defaultVariants: { tone: "neutral" },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
