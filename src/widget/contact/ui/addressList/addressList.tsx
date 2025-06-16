import clsx from "clsx";
import sAddressList from "./addressList.module.scss";
import { FC, HTMLAttributes } from "react";
import { Title } from "@/shared/ui/title";
import {
  CONTACT_DICT_FIELD,
  CONTACT_NAMESPACE,
} from "../../domain/contact.dict";
import { useTranslations } from "next-intl";
import { useContactAddressList } from "@/entity/contact";
import { AddressItem } from "./addressItem";

interface AddressListProps extends HTMLAttributes<HTMLDivElement> {}

export const AddressList: FC<AddressListProps> = (props) => {
  const { className } = props;
  const t = useTranslations(CONTACT_NAMESPACE);
  const { addressList } = useContactAddressList();
  return (
    <div className={clsx(sAddressList.root, className)}>
      <div className={sAddressList.inner}>
        <Title
          text={t(CONTACT_DICT_FIELD.addressTitle)}
          size="M"
          view="SECONDARY"
        />

        <div className={sAddressList.list}>
          {addressList.map((item) => (
            <AddressItem key={item.value} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
