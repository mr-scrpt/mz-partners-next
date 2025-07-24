import clsx from "clsx";
import sPhoneListContact from "./phoneList.contact.module.scss";
import { FC } from "react";
import { Title } from "@/shared/ui/title";
import { useTranslations } from "next-intl";
import {
  CONTACT_DICT_FIELD,
  CONTACT_NAMESPACE,
} from "../../../domain/contact.dict";
import { PhoneListContactProps } from "./type";

export const PhoneListContact: FC<PhoneListContactProps> = (props) => {
  const { className, ItemComponent, getDataList, ...rest } = props;
  console.log("output_log:  =>>>", rest);
  const t = useTranslations(CONTACT_NAMESPACE);
  const { phoneList } = getDataList();
  return (
    <div className={clsx(sPhoneListContact.root, className)} {...rest}>
      <div className={sPhoneListContact.inner}>
        <Title
          text={t(CONTACT_DICT_FIELD.phoneTitle)}
          size="M"
          view="SECONDARY"
          className={sPhoneListContact.title}
        />

        <div className={sPhoneListContact.list}>
          {phoneList.map((item) => (
            <ItemComponent key={item.value} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
