import { useAboutTextList } from "@/entity/about";
import clsx from "clsx";
import { FC } from "react";

import sTextAbout from "./text.about.module.scss";
import { TextAboutProps } from "./type";

export const TextAbout: FC<TextAboutProps> = (props) => {
  const { className, ...rest } = props;
  const { aboutTextList } = useAboutTextList();
  return (
    <div className={clsx(sTextAbout.root, className)} {...rest}>
      <div className={sTextAbout.inner}>
        {aboutTextList.map((item, idx) => (
          <p key={idx} className={sTextAbout.item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
