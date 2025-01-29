import { FC, HTMLAttributes } from "react";
import { HeaderLayout } from "./layout/header.layout";
import { Logo } from "@/shared/ui/logo";
import { PhoneListModule } from "@/shared/ui/phone";
import { LangSwitcher } from "@/shared/ui/langSwitcher";

interface HeaderSectionProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderSection: FC<HeaderSectionProps> = (props) => {
  return (
    <HeaderLayout
      VisualSlot={<Logo view="PRIMARY" />}
      InfoSlot={<PhoneListModule />}
      ActionSlot={<LangSwitcher />}
    />
  );
};
