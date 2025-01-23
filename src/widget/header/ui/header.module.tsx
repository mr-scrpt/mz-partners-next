import { FC, HTMLAttributes } from "react";
import { HeaderLayout } from "./layout/header.layout";
import { Logo } from "@/shared/ui/logo";

interface HeaderModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderModule: FC<HeaderModuleProps> = (props) => {
  return (
    <HeaderLayout
      VisualSlot={<Logo view="PRIMARY" />}
      InfoSlot={<div>Info</div>}
      ActionSlot={<div>Actions</div>}
    />
  );
};
