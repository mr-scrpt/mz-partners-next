import { HTMLAttributes } from "react";

export interface PhoneItemProps extends HTMLAttributes<HTMLDivElement> {
  phone: string;
}

export type PhoneListType = Array<string>;
