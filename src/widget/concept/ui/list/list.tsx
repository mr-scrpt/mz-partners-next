import { FC, HTMLAttributes } from "react";
import { useConceptItemList } from "../vm/useConceptList.model";
import clsx from "clsx";
import sConceptList from "./list.module.scss";
import { Item } from "./item";

interface ConceptListProps extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<ConceptListProps> = (props) => {
  const { className } = props;
  const { conceptItemList } = useConceptItemList();
  return (
    <div className={clsx(sConceptList.root, className)}>
      <div className={sConceptList.inner}>
        <div className={clsx(sConceptList.list)}>
          {conceptItemList.map((item, idx) => (
            <Item
              key={idx}
              idx={idx}
              className={sConceptList.item}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
