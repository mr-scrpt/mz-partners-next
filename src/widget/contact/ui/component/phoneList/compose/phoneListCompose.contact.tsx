import { FC, HTMLAttributes } from "react";
import { PhoneListContact } from "../phoneList.contact";
import { useContactPhoneList } from "@/entity/contact";
import { PhoneItemContact } from "../item/phoneItem.contact";

interface PhoneListComposeContactProps extends HTMLAttributes<HTMLDivElement> {}

export const PhoneListComposeContact: FC<PhoneListComposeContactProps> = (
  props,
) => {
  const { className } = props;
  return (
    <PhoneListContact
      getDataList={useContactPhoneList}
      ItemComponent={PhoneItemContact}
      className={className}
    />
  );
};
