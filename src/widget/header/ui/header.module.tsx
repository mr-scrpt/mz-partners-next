import { Logo } from "@/shared/ui/logo";
import { FC, HTMLAttributes } from "react";
import { Action } from "./action/action";
import { HeaderLayout } from "./layout/header.layout";
import { PhoneListModule } from "@/entity/contact";
import { ContactHeader } from "./contact/contact.header";

interface HeaderModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderModule: FC<HeaderModuleProps> = (props) => {
  return (
    <HeaderLayout
      VisualSlot={<Logo view="PRIMARY" />}
      InfoSlot={<ContactHeader />}
      ActionSlot={<Action />}
    />
  );
};
