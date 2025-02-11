import { FC, HTMLAttributes, ElementType } from "react";
import { TITLE_TO_CLASS } from "./style/title.map";
import clsx from "clsx";
import sTitle from "./style/title.module.scss";
import { TitleSizeType } from "../domain/size.type";
import { TitleViewType } from "../domain/view.type";

interface TitleProps extends HTMLAttributes<HTMLElement> {
  text: string;
  size?: TitleSizeType;
  view?: TitleViewType;
  as?: ElementType;
}

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
