import clsx from "clsx";
import { FC } from "react";

import { Title, TitleProps } from "../../title";
import sTitleSection from "./style/titleSection.module.scss";
import { TitleSectionPositionType } from "../domain/position.type";
import { TITLE_SECTION_TO_CLASS } from "./style/titleSection.map";
interface TitleSectionProps extends TitleProps {
  position: TitleSectionPositionType;
}

export const TitleSection: FC<TitleSectionProps> = (props) => {
  const { className, text, size = "L", view = "PRIMARY", position } = props;

  const clsTitleInner = clsx(
    sTitleSection.inner,
    [
      sTitleSection.position,
      sTitleSection.view,
      sTitleSection.deco,
      sTitleSection.deco_line,
      sTitleSection.size,
    ],
    {
      [TITLE_SECTION_TO_CLASS.position[position]]: true,
      [TITLE_SECTION_TO_CLASS.deco_line[position]]: true,
      [TITLE_SECTION_TO_CLASS.view[view]]: true,
      [TITLE_SECTION_TO_CLASS.size[size]]: true,
    },
  );

  const clsTitle = clsx(sTitleSection.title);
  return (
    <div className={clsx(sTitleSection.root, className)}>
      <div className={clsTitleInner}>
        <Title size={size} text={text} view={view} className={clsTitle} />
      </div>
    </div>
  );
};
