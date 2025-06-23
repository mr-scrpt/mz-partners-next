import { PhoneListModule } from "@/entity/contact";
import { FC, HTMLAttributes } from "react";
import sContactHeader from "./contact.header.module.scss";

interface ContactHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactHeader: FC<ContactHeaderProps> = (props) => {
  return <PhoneListModule classNameList={sContactHeader.list} />;
};
