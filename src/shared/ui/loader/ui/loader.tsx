import { FC, HTMLAttributes } from "react";
import sLoader from "./loader.module.scss";

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: "small" | "medium" | "large";
  variant?: "spinner" | "dots" | "pulse";
  overlay?: boolean;
  message?: string;
}

// Коллекция вариантов лоадеров
const loaderVariants = {
  spinner: ({ size }: { size: string }) => (
    <div className={`${sLoader.spinner} ${sLoader[size]}`}>
      <div className={sLoader.spinnerRing}></div>
    </div>
  ),
  dots: ({ size }: { size: string }) => (
    <div className={`${sLoader.dots} ${sLoader[size]}`}>
      <div className={sLoader.dot}></div>
      <div className={sLoader.dot}></div>
      <div className={sLoader.dot}></div>
    </div>
  ),
  pulse: ({ size }: { size: string }) => (
    <div className={`${sLoader.pulse} ${sLoader[size]}`}>
      <div className={sLoader.pulseRing}></div>
      <div className={sLoader.pulseCore}></div>
    </div>
  ),
} as const;

// Коллекция контейнеров
const containerTypes = {
  overlay: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
  } & HTMLAttributes<HTMLDivElement>) => (
    <div className={`${sLoader.overlay} ${className || ""}`} {...props}>
      <div className={sLoader.container}>{children}</div>
    </div>
  ),
  inline: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
  } & HTMLAttributes<HTMLDivElement>) => (
    <div className={`${sLoader.inline} ${className || ""}`} {...props}>
      {children}
    </div>
  ),
} as const;

// Компонент сообщения
const LoaderMessage: FC<{ message?: string }> = ({ message }) =>
  message ? <div className={sLoader.message}>{message}</div> : null;

export const Loader: FC<LoaderProps> = ({
  size = "medium",
  variant = "spinner",
  overlay = true,
  message,
  className,
  ...props
}) => {
  // Выбираем нужные компоненты из коллекций
  const LoaderVariant = loaderVariants[variant];
  const Container = containerTypes[overlay ? "overlay" : "inline"];

  return (
    <Container className={className} {...props}>
      <LoaderVariant size={size} />
      <LoaderMessage message={message} />
    </Container>
  );
};
