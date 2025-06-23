import { FC, HTMLAttributes } from "react";
import { useContactPhoneListLink } from "../vm/useContactPhoneListLink.model";
import { PhoneItemLink } from "./phone/phoneItemLink";
import { PhoneList } from "./phone/phoneList";

interface PhoneListModuleProps extends HTMLAttributes<HTMLDivElement> {
  classNameList?: string;
}

export const PhoneListModule: FC<PhoneListModuleProps> = (props) => {
  const { className, classNameList } = props;
  const { phoneList } = useContactPhoneListLink();
  return (
    <PhoneList
      className={className}
      classNameList={classNameList}
      phoneList={phoneList}
      ItemComponent={PhoneItemLink}
    />
  );
};
