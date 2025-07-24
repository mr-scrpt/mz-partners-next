import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sListPrinciple from "./list.principle.module.scss";
import { ItemPrincipleProps } from "./item/type";
import { GetPrincipleDataList } from "@/entity/principle";

interface ListPrincipleProps extends HTMLAttributes<HTMLDivElement> {
  ItemComponent: FC<ItemPrincipleProps>;
  getDataList: GetPrincipleDataList;
}

export const ListPrinciple: FC<ListPrincipleProps> = (props) => {
  const { className, ItemComponent, getDataList, ...rest } = props;
  const { principleItemList } = getDataList();
  return (
    <div className={clsx(sListPrinciple.root, className)} {...rest}>
      <div className={sListPrinciple.inner}>
        <div className={clsx(sListPrinciple.list)}>
          {principleItemList.map((item, idx) => (
            <ItemComponent
              key={idx}
              idx={idx}
              className={sListPrinciple.item}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
