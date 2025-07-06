import { Title } from "@/shared/ui/title";
import clsx from "clsx";
import { FC } from "react";
import sAdditionalListContact from "./additionalList.contact.module.scss";
import { AdditionalListContactProps } from "./type";

export const AdditionalListContact: FC<AdditionalListContactProps> = (
  props,
) => {
  const { className, ItemComponent, getDataList } = props;
  const { title, listData } = getDataList();
  return (
    <div className={clsx(sAdditionalListContact.root, className)}>
      <div className={sAdditionalListContact.inner}>
        <Title
          text={title}
          size="M"
          view="SECONDARY"
          className={sAdditionalListContact.title}
        />

        <div className={sAdditionalListContact.list}>
          {listData.map((item) => (
            <ItemComponent key={item.value} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
