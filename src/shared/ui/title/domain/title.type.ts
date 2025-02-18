import { HTMLAttributes, ElementType } from "react";
import { TitleSizeType } from "./size.type";
import { TitleViewType } from "./view.type";

export interface TitleProps extends HTMLAttributes<HTMLElement> {
  text: string;
  size?: TitleSizeType;
  view?: TitleViewType;
  as?: ElementType;
}
