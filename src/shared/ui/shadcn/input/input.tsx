import * as React from "react";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import styles from "./index.module.scss";
import { Button } from "../../button";
import { InputSize, InputVariant } from "./type";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  onPasswordVisible?: (name: string) => void;
  variant?: InputVariant;

  size?: InputSize;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      className,
      onPasswordVisible,
      variant = "outline",
      size = "l",
      ...props
    },
    ref,
  ) => {
    const [isVisible, setIsVisible] = React.useState(false);

    function handlePasswordEye() {
      setIsVisible((prevState) => !prevState);
      if (isVisible && onPasswordVisible) {
        onPasswordVisible(props.name || "");
      }
    }

    if (type === "password") {
      return (
        <div style={{ position: "relative", width: "100%" }}>
          <input
            ref={ref}
            type={isVisible ? "text" : "password"}
            className={`${styles.Input} ${className || ""}`}
            data-variant={variant}
            data-size={size}
            {...props}
          />
          <Button
            type="button"
            variant="ghost"
            size="l"
            onClick={handlePasswordEye}
            className={styles.passwordButton}
          >
            {isVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </Button>
        </div>
      );
    }
    return (
      <input
        ref={ref}
        type={type}
        className={`${styles.Input} ${className || ""}`}
        data-variant={variant}
        data-size={size}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
export default Input;
