import { FC, HTMLAttributes } from "react";
import { HeaderLayout } from "./layout/header.layout";

interface HeaderModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderModule: FC<HeaderModuleProps> = (props) => {
  return (
    <HeaderLayout
      VisualSlot={<div>Logo</div>}
      InfoSlot={<div>Info</div>}
      ActionSlot={<div>Actions</div>}
    />
  );
};
