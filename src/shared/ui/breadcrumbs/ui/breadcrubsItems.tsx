import { ReactNode } from "react";
import Link from "next/link";

// Интерфейсы пропсов
interface BreadcrumbProps {
  children: ReactNode;
  className?: string;
}

export interface BreadcrumbItemLinkProps extends BreadcrumbProps {
  href: string;
}

export interface BreadcrumbItemButtonProps extends BreadcrumbProps {
  onClick: () => void;
}

export interface BreadcrumbItemTextProps extends BreadcrumbProps {
  text: string;
}

// Компоненты
export const BreadcrumbItemText = ({
  children,
  className,
  ...props
}: BreadcrumbItemTextProps) => {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
};

export const BreadcrumbItemLink = ({
  children,
  className,
  href,
  ...props
}: BreadcrumbItemLinkProps) => {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
};

export const BreadcrumbItemButton = ({
  children,
  className,
  onClick,
  ...props
}: BreadcrumbItemButtonProps) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
