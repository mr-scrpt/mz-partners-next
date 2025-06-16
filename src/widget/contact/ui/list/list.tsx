import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sContactList from "./list.module.scss";
import { Item } from "./item";
import { useContactItemList } from "@/entity/contact";
import sDeco from "./deco.module.scss";
interface ContactListProps extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<ContactListProps> = (props) => {
  const { className } = props;
  const { contactItemList } = useContactItemList();
  return (
    <div className={clsx(sContactList.root, className)}>
      <div className={sContactList.inner}>
        <div
          className={clsx(sContactList.list, [
            sDeco.deco,
            sDeco.deco_separator,
          ])}
        >
          {contactItemList.map((item, idx) => (
            <Item key={idx} className={sContactList.item} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
