import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sPiplineList from "./list.module.scss";
import { Item } from "./item";
import { usePiplineItemList } from "@/entity/pipline";
import sDeco from "./deco.module.scss";
interface PiplineListProps extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<PiplineListProps> = (props) => {
  const { className } = props;
  const { piplineItemList } = usePiplineItemList();
  return (
    <div className={clsx(sPiplineList.root, className)}>
      <div className={sPiplineList.inner}>
        <div
          className={clsx(sPiplineList.list, [
            sDeco.deco,
            sDeco.deco_separator,
          ])}
        >
          {piplineItemList.map((item, idx) => (
            <Item
              key={idx}
              idx={idx}
              className={sPiplineList.item}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
