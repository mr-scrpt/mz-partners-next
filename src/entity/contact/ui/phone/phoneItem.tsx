import { FC } from "react";
import { PhoneItemProps } from "../../domain/contact.type";

export const PhoneItem: FC<PhoneItemProps> = (props) => {
  const { className, phoneData } = props;
  const { value } = phoneData;
  return <div className={className}>{value}</div>;
};
