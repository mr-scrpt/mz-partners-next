import { FC } from "react";
import { AddressItemProps } from "../../domain/contact.type";

export const AddressItem: FC<AddressItemProps> = (props) => {
  const { className, addressData } = props;
  const { value } = addressData;
  return <div className={className}>{value}</div>;
};
