import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sInfo from "./info.module.scss";
import { useContact } from "@/entity/contact";
import sDeco from "./deco.module.scss";
import { AddressList } from "../addressList/addressList";
interface InfoListProps extends HTMLAttributes<HTMLDivElement> {}

export const Info: FC<InfoListProps> = (props) => {
  const { className } = props;
  const contactItemList = useContact();

  const { addressList, phoneList, emailList } = contactItemList;

  return (
    <div className={clsx(sInfo.root, className)}>
      <div className={sInfo.inner}>
        <div className={clsx(sInfo.list, [sDeco.deco, sDeco.deco_separator])}>
          <AddressList />
        </div>
      </div>
    </div>
  );
};
