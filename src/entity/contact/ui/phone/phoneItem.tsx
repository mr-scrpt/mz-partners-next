import { FC, HTMLAttributes } from "react";
import { ContactPhoneItem } from "../../domain/contact.type";

export const PhoneItem: FC<PhoneItemProps> = (props) => {
  const { className, phoneData } = props;
  const { type, value } = phoneData;
  return <div className={className}>{value}</div>;
};
