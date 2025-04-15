import { FC, HTMLAttributes } from "react";
import { List } from "./list/list";
import { ProjectHeader } from "./header/project.header";
import { ProjectLayout } from "./layout/project.layout";

interface ProjectModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const ProjectModule: FC<ProjectModuleProps> = (props) => {
  return (
    <ProjectLayout HeaderSlot={<ProjectHeader />} ContentSlot={<List />} />
  );
};
