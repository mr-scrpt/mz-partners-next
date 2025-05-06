import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sCallbackList from "./list.module.scss";
import { Item } from "./item";
import { useCallbackItemList } from "@/entity/callback";
import sDeco from "./deco.module.scss";
interface CallbackListProps extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<CallbackListProps> = (props) => {
  const { className } = props;
  const { callbackItemList } = useCallbackItemList();
  return (
    <div className={clsx(sCallbackList.root, className)}>
      <div className={sCallbackList.inner}>
        <div
          className={clsx(sCallbackList.list, [
            sDeco.deco,
            sDeco.deco_separator,
          ])}
        >
          {callbackItemList.map((item, idx) => (
            <Item key={idx} className={sCallbackList.item} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
