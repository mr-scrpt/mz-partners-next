import { Logo } from "@/shared/ui/logo";
import { PhoneListModule } from "@/shared/ui/phone";
import { FC, HTMLAttributes } from "react";
import { Action } from "./action/action";
import { HeaderLayout } from "./layout/header.layout";

interface HeaderModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderModule: FC<HeaderModuleProps> = (props) => {
  return (
    <HeaderLayout
      VisualSlot={<Logo view="PRIMARY" />}
      InfoSlot={<PhoneListModule />}
      ActionSlot={<Action />}
    />
  );
};
