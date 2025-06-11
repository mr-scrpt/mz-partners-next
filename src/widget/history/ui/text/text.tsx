import { useHistoryTextList } from "@/entity/history";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import sText from "./text.module.scss";
// import sDeco from "./deco.module.scss";

interface TextProps extends HTMLAttributes<HTMLDivElement> {}

export const Text: FC<TextProps> = (props) => {
  const { className } = props;
  const { historyTextList } = useHistoryTextList();
  return (
    <div className={clsx(sText.root, className)}>
      <div className={clsx(sText.inner)}>
        {historyTextList.map((item, idx) => (
          <p key={idx} className={sText.item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
