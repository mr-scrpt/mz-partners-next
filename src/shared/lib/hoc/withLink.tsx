import { FC, ComponentProps } from "react";
import Link from "next/link";

interface WithLinkProps {
  href: string;
  linkProps?: ComponentProps<typeof Link>;
}

export const WithLink = <P extends object>(Component: FC<P>) => {
  const LinkedComponent: FC<P & WithLinkProps> = ({
    href,
    linkProps,
    ...props
  }) => {
    return (
      <Link href={href} {...linkProps}>
        <Component {...(props as P)} />
      </Link>
    );
  };

  LinkedComponent.displayName = `WithLink(${Component.displayName || Component.name})`;

  return LinkedComponent;
};
