import { FC, HTMLAttributes } from "react";
import { PhoneItem } from "./phoneItem";
import { PhoneList } from "./phoneList";

interface PhoneListModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const PhoneListModule: FC<PhoneListModuleProps> = (props) => {
  const { className } = props;
  return (
    <PhoneList
      className={className}
      phoneList={["+38 (099) 000-00-00", "+38 (066) 000-00-00"]}
      ItemComponent={PhoneItem}
    />
  );
};
