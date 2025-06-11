import { useAboutTextList } from "@/entity/about";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import sText from "./text.module.scss";

interface TextProps extends HTMLAttributes<HTMLDivElement> {}

export const Text: FC<TextProps> = (props) => {
  const { className } = props;
  const { aboutTextList } = useAboutTextList();
  return (
    <div className={clsx(sText.root, className)}>
      <div className={sText.inner}>
        {aboutTextList.map((item, idx) => (
          <p key={idx} className={sText.item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
