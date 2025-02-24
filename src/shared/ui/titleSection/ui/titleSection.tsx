import clsx from "clsx";
import { FC } from "react";

import { Title, TitleProps } from "../../title";
import { TitleSectionPositionType } from "../domain/position.type";
import sTitleSection from "./style/titleSection.module.scss";
import { useTitleSectionStyle } from "./style/useTitleSectionStyle";
interface TitleSectionProps extends TitleProps {
  position: TitleSectionPositionType;
}

export const TitleSection: FC<TitleSectionProps> = (props) => {
  const { className, text, size = "L", view = "PRIMARY", position } = props;

  const { cPosition, cView, cSize, cBase, cDeco_line } = useTitleSectionStyle();
  const clsTitleInner = clsx(sTitleSection.inner, [cBase], {
    [cPosition.options[position]]: true,
    [cDeco_line.options[position]]: true,
    [cView.options[view]]: true,
    [cSize.options[size]]: true,
  });

  const clsTitle = clsx(sTitleSection.title);
  return (
    <div className={clsx(sTitleSection.root, className)}>
      <div className={clsTitleInner}>
        <Title size={size} text={text} view={view} className={clsTitle} />
      </div>
    </div>
  );
};
