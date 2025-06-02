import { HTMLAttributes, memo } from "react";

import clsx from "clsx";
import { IconListType } from "../domain/icon.type";
import cls from "./style/icon.module.scss";
import { useIconStyle } from "./style/useIconStyle";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  icon: IconListType;
  classIcon?: string;
}

export const Icon = memo((props: IconProps) => {
  const { className, icon, ...etc } = props;

  const { cIcon_list, cBase } = useIconStyle();

  const clsIcon = clsx(cls.icon, [className, cBase], {
    [cIcon_list.options[icon]]: true,
  });

  return <span className={clsIcon} {...etc} />;
});
