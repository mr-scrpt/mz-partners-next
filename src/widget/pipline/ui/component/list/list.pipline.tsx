import clsx from "clsx";
import { ComponentType, FC, HTMLAttributes } from "react";

import { GetPiplineDataList } from "@/entity/pipline";
import sDeco from "./deco.module.scss";
import { ItemPiplineProps } from "./item/type";
import sListPipline from "./list.pipline.module.scss";

interface ListPiplineProps extends HTMLAttributes<HTMLDivElement> {
  ItemComponent: ComponentType<ItemPiplineProps>;
  getDataList: GetPiplineDataList;
}

export const ListPipline: FC<ListPiplineProps> = (props) => {
  const { className, ItemComponent, getDataList } = props;
  const { piplineItemList } = getDataList();
  return (
    <div className={clsx(sListPipline.root, className)}>
      <div className={sListPipline.inner}>
        <div
          className={clsx(sListPipline.list, [
            sDeco.deco,
            sDeco.deco_separator,
          ])}
        >
          {piplineItemList.map((item, idx) => (
            <ItemComponent
              key={idx}
              idx={idx}
              className={sListPipline.item}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
