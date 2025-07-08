import { FC, HTMLAttributes } from "react";
import { LayoutCompetency } from "./component/layout/layout.competency";
import { HeaderCompetency } from "./component/header/header.competency";
import { ListCompetencyAnimatedCompose } from "./compose/listCompetencyAnimated.compose";

interface CompetencyModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const CompetencyModule: FC<CompetencyModuleProps> = (props) => {
  const { className } = props;
  return (
    <LayoutCompetency
      HeaderSlot={<HeaderCompetency />}
      ContentSlot={<ListCompetencyAnimatedCompose />}
      className={className}
    />
  );
};
