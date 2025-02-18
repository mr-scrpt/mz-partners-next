import clsx from "clsx";
import { FC } from "react";
import { TitleProps } from "../domain/title.type";
import { TITLE_TO_CLASS } from "./style/title.map";
import sTitle from "./style/title.module.scss";

export const Title: FC<TitleProps> = (props) => {
  const {
    text,
    className,
    size = "L",
    view = "PRIMARY",
    as: Component = "h1",
    ...restProps
  } = props;

  const clsTitle = clsx(sTitle.root, [className, TITLE_TO_CLASS.base], {
    [TITLE_TO_CLASS.size[size]]: true,
    [TITLE_TO_CLASS.view[view]]: true,
  });

  return (
    <Component className={clsTitle} {...restProps}>
      <div className={sTitle.text}>{text}</div>
    </Component>
  );
};
