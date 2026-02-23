import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils.ts";

const buttonVariants = cva(
  "btn-base",
  {
    variants: {
      intent: {
        cyan: "btn-cyan",
        ghost: "btn-ghost",
        bare: "btn-bare",
      },
      size: {
        sm: "btn-sm",
        md: "btn-md",
        lg: "btn-lg",
      },
    },
    defaultVariants: { intent: "cyan", size: "md" },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ intent, size }), className)}
      {...props}
    />
  )
);

Button.displayName = "Button";
