import { FC, HTMLAttributes } from "react";
import { HeaderLayout } from "./layout/header.layout";
import { Logo } from "@/shared/ui/logo";
import { PhoneListModule } from "@/shared/ui/phone";
import { LangSwitcher } from "@/shared/ui/langSwitcher";

interface HeaderModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderModule: FC<HeaderModuleProps> = (props) => {
  return (
    <HeaderLayout
      VisualSlot={<Logo view="PRIMARY" />}
      InfoSlot={<PhoneListModule />}
      ActionSlot={<LangSwitcher />}
    />
  );
};
