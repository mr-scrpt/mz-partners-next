// "use client";
import { useHistoryTextList } from "@/entity/history";
import clsx from "clsx";
import { FC } from "react";

import sTextHistory from "./text.history.module.scss";
import { TextHistoryProps } from "./type";

export const TextHistory: FC<TextHistoryProps> = (props) => {
  const { className } = props;
  const { historyTextList } = useHistoryTextList();
  return (
    <div className={clsx(sTextHistory.root, className)}>
      <div className={clsx(sTextHistory.inner)}>
        {historyTextList.map((item, idx) => (
          <p key={idx} className={sTextHistory.item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
