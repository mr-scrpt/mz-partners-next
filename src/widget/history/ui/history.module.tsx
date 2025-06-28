import { FC, HTMLAttributes } from "react";
import { HistoryHeader } from "./header/history.header";
import { HistoryLayout } from "./layout/history.layout";
import { Text } from "./text/text";
import { Content } from "./content/content";

interface HistoryModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const HistoryModule: FC<HistoryModuleProps> = (props) => {
  const { className } = props;
  return (
    <HistoryLayout
      HeaderSlot={<HistoryHeader />}
      ContentSlot={<Content />}
      className={className}
    />
  );
};
