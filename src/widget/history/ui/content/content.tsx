import { FC, HTMLAttributes } from "react";

interface ContentProps extends HTMLAttributes<HTMLDivElement> {}
import sContent from "./content.module.scss";
import sLayout from "../layout/history.layout.module.scss";
import sDeco from "./deco.module.scss";
import { Text } from "../text/text";
import { Banner } from "../banner/banner";
import clsx from "clsx";

export const Content: FC<ContentProps> = (props) => {
  return (
    <div className={sContent.root}>
      <div className={sContent.inner}>
        <Text className={clsx(sDeco.textBG, sContent.text, sLayout.colStart)} />
        <Banner className={sContent.banner} />
      </div>
    </div>
  );
};
