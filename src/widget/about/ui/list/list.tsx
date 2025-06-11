import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sAboutList from "./list.module.scss";
import { Item } from "./item";
import { useAboutItemList } from "@/entity/about";

interface AboutListProps extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<AboutListProps> = (props) => {
  const { className } = props;
  const { pojectItemList } = useAboutItemList();
  return (
    <div className={clsx(sAboutList.root, className)}>
      <div className={sAboutList.inner}>
        <div className={clsx(sAboutList.list)}>
          {pojectItemList.map((item, idx) => (
            <Item
              key={idx}
              idx={idx}
              className={sAboutList.item}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
