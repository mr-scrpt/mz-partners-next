import clsx from "clsx";
import { FC } from "react";
import { TitleProps } from "../domain/title.type";
import sTitle from "./style/title.module.scss";
import { useTitleStyle } from "./style/useTitleStyle";

export const Title: FC<TitleProps> = (props) => {
  const {
    text,
    className,
    size = "L",
    view = "PRIMARY",
    as: Component = "h1",
    ...restProps
  } = props;

  const { cBase, cSize, cView } = useTitleStyle();
  const clsTitle = clsx(sTitle.root, [className, cBase], {
    [cSize.options[size]]: true,

    [cView.options[view]]: true,
  });

  return (
    <Component className={clsTitle} {...restProps}>
      <div className={sTitle.text}>{text}</div>
    </Component>
  );
};
