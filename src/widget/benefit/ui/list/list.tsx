import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sBenefitList from "./list.module.scss";
import { Item } from "./item";
import { useBenefitItemList } from "@/entity/benefit";

interface BenefitListProps extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<BenefitListProps> = (props) => {
  const { className } = props;
  const { benefitItemList } = useBenefitItemList();
  return (
    <div className={clsx(sBenefitList.root, className)}>
      <div className={sBenefitList.inner}>
        <div className={clsx(sBenefitList.list)}>
          {benefitItemList.map((item, idx) => (
            <Item
              key={idx}
              idx={idx}
              className={sBenefitList.item}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
