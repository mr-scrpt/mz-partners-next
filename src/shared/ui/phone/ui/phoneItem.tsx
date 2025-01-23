import { FC } from "react";
import { PhoneItemProps } from "../domain/type";

// interface PhoneItemProps extends HTMLAttributes<HTMLDivElement> {
//   phone: string;
// }

export const PhoneItem: FC<PhoneItemProps> = (props) => {
  const { className, phone } = props;
  return <div className={className}>{phone}</div>;
};
