import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef, memo } from "react";
import { IconType } from "react-icons";

const buttonVariants = cva(
  "px-8 font-medium flex items-center gap-2 py-4 rounded-full border-2 border-white-500",
  {
    variants: {
      variant: {
        default: "bg-white text-neutral-950",
        outline: "text-white-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type ButtonProps = {
  asChild?: boolean;
  startIcon?: IconType;
  endIcon?: IconType;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const iconSize = 26;

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    asChild,
    children,
    variant,
    startIcon: StartIcon,
    endIcon: EndIcon,
    ...props
  },
  ref
) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={cn(buttonVariants({ variant }))} ref={ref} {...props}>
      {!!StartIcon && <StartIcon size={iconSize} />}
      {children}
      {!!EndIcon && <EndIcon size={iconSize} />}
    </Comp>
  );
};

export default memo(forwardRef(Button));
