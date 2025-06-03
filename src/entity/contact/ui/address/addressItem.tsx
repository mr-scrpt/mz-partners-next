import { FC } from "react";
import { AddressItemProps } from "../domain/type";

// interface AddressItemProps extends HTMLAttributes<HTMLDivElement> {
//   address: string;
// }

export const AddressItem: FC<AddressItemProps> = (props) => {
  const { className, address } = props;
  return <div className={className}>{address}</div>;
};
