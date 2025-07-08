import { FC, HTMLAttributes } from "react";
import { HeaderPrinciple } from "./component/header/header.principle";
import { ListPrincipleAnimatedCompose } from "./compose/listPrincipleAnimated.compose";
import { LayoutPrinciple } from "./component/layout/layout.principle";

interface PrincipleModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const PrincipleModule: FC<PrincipleModuleProps> = (props) => {
  const { className } = props;
  return (
    <LayoutPrinciple
      HeaderSlot={<HeaderPrinciple />}
      ContentSlot={<ListPrincipleAnimatedCompose />}
      className={className}
    />
  );
};
