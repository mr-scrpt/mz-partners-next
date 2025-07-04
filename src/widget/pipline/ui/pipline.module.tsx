import { FC, HTMLAttributes } from "react";
import { LayoutPipline } from "./component/layout/layout.pipline";
import { ListPiplineAnimatedCompose } from "./compose/listPiplineAnimated.compose";
import { HeaderPipline } from "./component/header/header.pipline";

interface PiplineModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const PiplineModule: FC<PiplineModuleProps> = (props) => {
  const { className } = props;
  return (
    <LayoutPipline
      HeaderSlot={<HeaderPipline />}
      ContentSlot={<ListPiplineAnimatedCompose />}
      className={className}
    />
  );
};
