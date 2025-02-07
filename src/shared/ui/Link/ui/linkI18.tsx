import { Link } from "@/shared/lib/i18n/routing";
import { ComponentProps, FC } from "react";
import sLink from "./linkI18.module.scss";
import clsx from "clsx";

// interface LinkI18Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}
interface LinkI18Props extends ComponentProps<typeof Link> {}

export const LinkI18: FC<LinkI18Props> = (props) => {
  const { className } = props;
  return <Link {...props} className={clsx(sLink.root, className)} />;
};
