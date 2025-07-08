import { ComponentType, FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sListBenefit from "./list.benefit.module.scss";
import { GetBenefitDataList } from "@/entity/benefit";
import { ItemBenefitProps } from "./item/type";

interface ListBenefitProps extends HTMLAttributes<HTMLDivElement> {
  ItemComponent: ComponentType<ItemBenefitProps>;
  getDataList: GetBenefitDataList;
}

export const ListBenefit: FC<ListBenefitProps> = (props) => {
  const { className, ItemComponent, getDataList } = props;
  const { benefitItemList } = getDataList();
  return (
    <div className={clsx(sListBenefit.root, className)}>
      <div className={sListBenefit.inner}>
        <div className={clsx(sListBenefit.list)}>
          {benefitItemList.map((item, idx) => (
            <ItemComponent
              key={idx}
              idx={idx}
              className={sListBenefit.item}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
