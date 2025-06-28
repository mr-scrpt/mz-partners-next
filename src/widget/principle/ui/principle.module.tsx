import { FC, HTMLAttributes } from "react";
import { PrincipleLayout } from "./layout/principle.layout";
import { PrincipleHeader } from "./header/principle.header";
import { List } from "./list/list";

interface PrincipleModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const PrincipleModule: FC<PrincipleModuleProps> = (props) => {
  const { className } = props;
  return (
    <PrincipleLayout
      HeaderSlot={<PrincipleHeader />}
      ContentSlot={<List />}
      className={className}
    />
  );
};
