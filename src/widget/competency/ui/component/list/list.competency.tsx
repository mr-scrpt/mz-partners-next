import { GetCompetencyDataList } from "@/entity/competency";
import clsx from "clsx";
import { ComponentType, FC, HTMLAttributes } from "react";
import { ItemCompetencyProps } from "./item/type";
import sListCompetency from "./list.competency.module.scss";

interface ListCompetencyProps extends HTMLAttributes<HTMLDivElement> {
  ItemComponent: ComponentType<ItemCompetencyProps>;
  getDataList: GetCompetencyDataList;
}

export const ListCompetency: FC<ListCompetencyProps> = (props) => {
  const { className, ItemComponent, getDataList } = props;
  const { competencyItemList } = getDataList();
  return (
    <div className={clsx(sListCompetency.root, className)}>
      <div className={sListCompetency.inner}>
        <div className={clsx(sListCompetency.list)}>
          {competencyItemList.map((item, idx) => (
            <ItemComponent
              key={idx}
              idx={idx}
              className={sListCompetency.item}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
