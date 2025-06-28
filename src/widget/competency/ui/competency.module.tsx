import { FC, HTMLAttributes } from "react";
import { CompetencyLayout } from "./layout/competency.layout";
import { CompetencyHeader } from "./header/competency.header";
import { List } from "./list/list";

interface CompetencyModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const CompetencyModule: FC<CompetencyModuleProps> = (props) => {
  const { className } = props;
  return (
    <CompetencyLayout
      HeaderSlot={<CompetencyHeader />}
      ContentSlot={<List />}
      className={className}
    />
  );
};
