import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sPrincipleList from "./list.module.scss";
import { Item } from "./item";
import { usePrincipleItemList } from "@/entity/principle";

interface PrincipleListProps extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<PrincipleListProps> = (props) => {
  const { className } = props;
  const { principleItemList } = usePrincipleItemList();
  return (
    <div className={clsx(sPrincipleList.root, className)}>
      <div className={sPrincipleList.inner}>
        <div className={clsx(sPrincipleList.list)}>
          {principleItemList.map((item, idx) => (
            <Item
              key={idx}
              idx={idx}
              className={sPrincipleList.item}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
