import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75e6c4]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0",
  {
    variants: {
      variant: {
        default:
          "button-shine border border-[#0a5c54]/80 bg-[#0a7b6d] text-white shadow-[0_20px_45px_rgba(10,92,84,0.22)] hover:-translate-y-0.5 hover:bg-[#08685d] hover:shadow-[0_28px_60px_rgba(10,92,84,0.3)]",
        secondary:
          "border border-white/70 bg-white/70 text-[#153436] shadow-[0_14px_34px_rgba(18,43,56,0.08)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-[#9fe8d0] hover:bg-white/88 hover:text-[#0a5c54]",
        ghost:
          "border border-[#b9ddd7]/70 bg-white/35 text-[#35565c] backdrop-blur-md hover:-translate-y-0.5 hover:border-[#83d8bf] hover:bg-white/55 hover:text-[#14373a]",
      },
      size: {
        default: "h-12 px-6 py-3",
        lg: "h-14 px-7 py-3.5 text-[15px]",
        sm: "h-10 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
