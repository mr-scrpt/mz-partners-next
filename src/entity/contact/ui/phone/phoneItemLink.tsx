import Link from "next/link";
import { FC } from "react";
import { PhoneItemProps } from "../../domain/contact.type";

export const PhoneItemLink: FC<PhoneItemProps> = (props) => {
  const { className, phoneData } = props;
  const { value, link } = phoneData;
  return (
    <Link className={className} href={link}>
      !!! 11111 !!!
    </Link>
  );
};
