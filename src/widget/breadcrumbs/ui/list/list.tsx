import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sBreadcrumbsList from "./list.module.scss";
import { Item } from "./item";
import { useBreadcrumbsItemList } from "@/entity/breadcrumbs";

interface BreadcrumbsListProps extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<BreadcrumbsListProps> = (props) => {
  const { className } = props;
  const { breadcrumbsItemList } = useBreadcrumbsItemList();
  return (
    <div className={clsx(sBreadcrumbsList.root, className)}>
      <div className={sBreadcrumbsList.inner}>
        <div className={clsx(sBreadcrumbsList.list)}>
          {breadcrumbsItemList.map((item, idx) => (
            <Item
              key={idx}
              idx={idx}
              className={sBreadcrumbsList.item}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
