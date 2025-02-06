import { Link } from "@/shared/lib/i18n/routing";
import { ComponentProps, FC } from "react";

// interface LinkI18Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}
interface LinkI18Props extends ComponentProps<typeof Link> {}

export const LinkI18: FC<LinkI18Props> = (props) => {
  return <Link {...props} />;
};
