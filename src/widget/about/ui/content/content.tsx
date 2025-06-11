import { FC, HTMLAttributes } from "react";

interface ContentProps extends HTMLAttributes<HTMLDivElement> {}
import sContent from "./content.module.scss";
import { Text } from "../text/text";
import { Banner } from "../banner/banner";

export const Content: FC<ContentProps> = (props) => {
  return (
    <div className={sContent.root}>
      <div className={sContent.inner}>
        <Text />
        <Banner />
      </div>
    </div>
  );
};
