import { FC, HTMLAttributes } from "react";
import { TeamLayout } from "./layout/team.layout";
import { TeamHeader } from "./header/team.header";
import { List } from "./list/list";

interface TeamModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const TeamModule: FC<TeamModuleProps> = (props) => {
  const { className } = props;
  return (
    <TeamLayout
      HeaderSlot={<TeamHeader />}
      ContentSlot={<List />}
      className={className}
    />
  );
};
