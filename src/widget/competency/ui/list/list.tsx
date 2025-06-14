import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sCompetencyList from "./list.module.scss";
import { Item } from "./item";
import { useCompetencyItemList } from "@/entity/competency";

interface CompetencyListProps extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<CompetencyListProps> = (props) => {
  const { className } = props;
  const { competencyItemList } = useCompetencyItemList();
  return (
    <div className={clsx(sCompetencyList.root, className)}>
      <div className={sCompetencyList.inner}>
        <div className={clsx(sCompetencyList.list)}>
          {competencyItemList.map((item, idx) => (
            <Item
              key={idx}
              idx={idx}
              className={sCompetencyList.item}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
