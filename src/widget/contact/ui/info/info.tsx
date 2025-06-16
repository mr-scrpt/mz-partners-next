import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { AddressList } from "../addressList/addressList";
import sDeco from "./deco.module.scss";
import sInfo from "./info.module.scss";
interface InfoListProps extends HTMLAttributes<HTMLDivElement> {}

export const Info: FC<InfoListProps> = (props) => {
  const { className } = props;

  return (
    <div className={clsx(sInfo.root, className)}>
      <div className={sInfo.inner}>
        <div className={clsx(sInfo.list, [sDeco.deco, sDeco.deco_separator])}>
          <AddressList className={sInfo.item} />
        </div>
      </div>
    </div>
  );
};
