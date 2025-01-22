import { FC, HTMLAttributes } from "react";
import { PhoneList } from "./phoneList";
import { PhoneListType } from "../domain/type";
import { PhoneItem } from "./phoneItem";

interface PhoneListModuleProps extends HTMLAttributes<HTMLDivElement> {
  phoneList: PhoneListType;
}

export const PhoneListModule: FC<PhoneListModuleProps> = (props) => {
  const { className, phoneList } = props;
  return (
    <PhoneList
      className={className}
      phoneList={phoneList}
      ItemComponent={PhoneItem}
    />
  );
};
