import { FC, HTMLAttributes } from "react";
import { PiplineLayout } from "./layout/pipline.layout";
import { PiplineHeader } from "./header/pipline.header";
import { List } from "./list/list";

interface PiplineModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const PiplineModule: FC<PiplineModuleProps> = (props) => {
  return (
    <PiplineLayout HeaderSlot={<PiplineHeader />} ContentSlot={<List />} />
  );
};
