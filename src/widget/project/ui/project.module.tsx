import { FC, HTMLAttributes } from "react";
import { ListProjectAnimatedCompose } from "./compose/listProjectAnimated.compose";
import { LayoutProject } from "./component/layout/layout.project";
import { HeaderProject } from "./component/header/header.project";

interface ProjectModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const ProjectModule: FC<ProjectModuleProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <LayoutProject
      HeaderSlot={<HeaderProject />}
      ContentSlot={<ListProjectAnimatedCompose />}
      className={className}
      {...rest}
    />
  );
};
