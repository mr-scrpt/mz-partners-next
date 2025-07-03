import { ComponentType, FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sProjectList from "./list.project.module.scss";
import { ItemProjectProps } from "./item/type";
import { GetProjectDataList } from "@/entity/project";

interface ListProjectProps extends HTMLAttributes<HTMLDivElement> {
  ItemComponent: ComponentType<ItemProjectProps>;
  getDataList: GetProjectDataList;
}

export const ListProject: FC<ListProjectProps> = (props) => {
  const { className, ItemComponent, getDataList } = props;
  const { projectItemList } = getDataList();
  return (
    <div className={clsx(sProjectList.root, className)}>
      <div className={sProjectList.inner}>
        <div className={clsx(sProjectList.list)}>
          {projectItemList.map((item, idx) => (
            <ItemComponent
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
