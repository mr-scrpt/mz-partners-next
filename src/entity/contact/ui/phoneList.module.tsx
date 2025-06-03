import { FC, HTMLAttributes } from "react";
import { useContactPhoneList } from "../vm/useContactPhoneList.model";
import { PhoneItem } from "./phone/phoneItem";
import { PhoneList } from "./phone/phoneList";

interface PhoneListModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const PhoneListModule: FC<PhoneListModuleProps> = (props) => {
  const { className } = props;
  const { phoneList } = useContactPhoneList();
  return (
    <PhoneList
      className={className}
      phoneList={phoneList}
      ItemComponent={PhoneItem}
    />
  );
};
