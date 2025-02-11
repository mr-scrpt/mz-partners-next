import { FC, HTMLAttributes, ElementType } from "react";
import { TITLE_TO_CLASS } from "./style/title.map";
import clsx from "clsx";
import sTitle from "./style/title.module.scss";
import { TitleSizeType } from "../domain/size.type";

interface TitleProps extends HTMLAttributes<HTMLElement> {
  text: string;
  size: TitleSizeType;
  as?: ElementType;
}

export const Title: FC<TitleProps> = (props) => {
  const { text, className, size, as: Component = "h1", ...restProps } = props;

  const clsTitle = clsx(sTitle.button, [className], {
    [TITLE_TO_CLASS.size[size]]: true,
  });

  return (
    <Component className={clsTitle} {...restProps}>
      <div className={sTitle.text}>{text}</div>
    </Component>
  );
};
