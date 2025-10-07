import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 active:scale-95 active:shadow-md",
        destructive:
          "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg hover:shadow-xl hover:from-red-700 hover:to-red-800 transform hover:scale-105 active:scale-95 active:shadow-md",
        outline:
          "border-2 border-blue-500/20 bg-background/50 backdrop-blur-sm shadow-lg hover:bg-blue-500/10 hover:border-blue-500/40 hover:shadow-xl transform hover:scale-105 active:scale-95 active:shadow-md",
        secondary:
          "bg-gradient-to-r from-zinc-800 to-zinc-900 text-white shadow-lg hover:shadow-xl hover:from-zinc-700 hover:to-zinc-800 transform hover:scale-105 active:scale-95 active:shadow-md",
        ghost:
          "hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 active:scale-95",
        link: "text-blue-400 underline-offset-4 hover:underline hover:text-blue-300 active:scale-95",
        premium:
          "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-xl hover:shadow-2xl hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 ring-2 ring-amber-500/20 active:scale-95 active:shadow-lg",
        trading:
          "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 active:scale-95 active:shadow-md",
        danger:
          "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:from-red-700 hover:to-pink-700 transform hover:scale-105 active:scale-95 active:shadow-md",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-11 w-11",
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
