import { LogoLink } from "@/shared/ui/logo/ui/logoLink";
import { FC, HTMLAttributes } from "react";
import { Action } from "./action/action";
import { ContactHeader } from "./contact/contact.header";
import { HeaderLayout } from "./layout/header.layout";
import { useLocale } from "next-intl";

interface HeaderModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderModule: FC<HeaderModuleProps> = (props) => {
  const { className } = props;
  const locale = useLocale();
  return (
    <HeaderLayout
      VisualSlot={<LogoLink href={`/${locale}`} view="PRIMARY" />}
      InfoSlot={<ContactHeader />}
      ActionSlot={<Action />}
      className={className}
    />
  );
};
