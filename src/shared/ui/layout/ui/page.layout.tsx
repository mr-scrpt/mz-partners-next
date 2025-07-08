import { ElementType, FC, HTMLAttributes, ReactNode } from "react";

interface PageLayoutProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export const PageLayout: FC<PageLayoutProps> = ({
  as: Tag = "div",
  children,
  className,
  ...rest
}) => {
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
};
