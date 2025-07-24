import clsx from "clsx";
import sAddressList from "./addressList.contact.module.scss";
import { FC } from "react";
import { Title } from "@/shared/ui/title";
import { useTranslations } from "next-intl";
import {
  CONTACT_NAMESPACE,
  CONTACT_DICT_FIELD,
} from "../../../domain/contact.dict";
import { AddressListContactProps } from "./type";

export const AddressListContact: FC<AddressListContactProps> = (props) => {
  const { className, ItemComponent, getDataList, ...rest } = props;
  console.log("output_log:  =>>>", rest);
  const t = useTranslations(CONTACT_NAMESPACE);
  const { addressList } = getDataList();
  return (
    <div className={clsx(sAddressList.root, className)} {...rest}>
      <div className={sAddressList.inner}>
        <Title
          text={t(CONTACT_DICT_FIELD.addressTitle)}
          size="M"
          view="SECONDARY"
          className={sAddressList.title}
        />

        <div className={sAddressList.list}>
          {addressList.map((item) => (
            <ItemComponent key={item.value} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
