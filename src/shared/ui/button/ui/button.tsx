import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import styles from "./button.module.scss";
import { ButtonSize, ButtonVariant } from "./type";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", className, size = "l", asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        data-size={size}
        data-variant={variant}
        className={`${styles.Button} ${className ? className : ""}`}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
export type { ButtonProps };
