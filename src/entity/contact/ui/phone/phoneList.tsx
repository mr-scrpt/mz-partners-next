import clsx from "clsx";
import { ComponentType, FC, HTMLAttributes } from "react";

import sPhoneList from "./phoneList.module.scss";
import { ContactPhoneItem, PhoneItemProps } from "../../domain/contact.type";

interface PhoneListProps extends HTMLAttributes<HTMLDivElement> {
  phoneList: ContactPhoneItem[];
  ItemComponent: ComponentType<PhoneItemProps>;
  classNameList?: string;
}

export const PhoneList: FC<PhoneListProps> = (props) => {
  const { className, classNameList, phoneList, ItemComponent } = props;
  return (
    <div className={clsx(className, sPhoneList.root)}>
      <ul className={clsx(sPhoneList.list, classNameList)}>
        {phoneList.map((p) => (
          <ItemComponent
            phoneData={p}
            key={p.value}
            className={sPhoneList.item}
          />
        ))}
      </ul>
    </div>
  );
};
