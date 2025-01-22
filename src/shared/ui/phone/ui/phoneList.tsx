import clsx from "clsx";
import { ComponentType, FC, HTMLAttributes } from "react";

import { PhoneItemProps, PhoneListType } from "../domain/type";
import sPhoneList from "./phoneList.module.scss";

interface PhoneListProps extends HTMLAttributes<HTMLDivElement> {
  phoneList: PhoneListType;
  ItemComponent: ComponentType<PhoneItemProps>;
}

export const PhoneList: FC<PhoneListProps> = (props) => {
  const { className, phoneList, ItemComponent } = props;
  return (
    <div className={clsx(className, sPhoneList.root)}>
      <ul className={sPhoneList.list}>
        {phoneList.map((p) => (
          <ItemComponent phone={p} key={p} className={sPhoneList.item} />
        ))}
      </ul>
    </div>
  );
};
