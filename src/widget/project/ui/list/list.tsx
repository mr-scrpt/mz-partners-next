import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sProjectList from "./list.module.scss";
import { Item } from "./item";
import { useProjectItemList } from "@/entity/project";

interface ProjectListProps extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<ProjectListProps> = (props) => {
  const { className } = props;
  const { pojectItemList } = useProjectItemList();
  return (
    <div className={clsx(sProjectList.root, className)}>
      <div className={sProjectList.inner}>
        <div className={clsx(sProjectList.list)}>
          {pojectItemList.map((item, idx) => (
            <Item
              key={idx}
              idx={idx}
              className={sProjectList.item}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
