import clsx from "clsx";
import sPhoneList from "./phoneList.module.scss";
import { FC, HTMLAttributes } from "react";
import { Title } from "@/shared/ui/title";
import {
  CONTACT_DICT_FIELD,
  CONTACT_NAMESPACE,
} from "../../domain/contact.dict";
import { useTranslations } from "next-intl";
import { useContactPhoneList } from "@/entity/contact";
import { PhoneItem } from "./phoneItem";

interface PhoneListProps extends HTMLAttributes<HTMLDivElement> {}

export const PhoneList: FC<PhoneListProps> = (props) => {
  const { className } = props;
  const t = useTranslations(CONTACT_NAMESPACE);
  const { phoneList } = useContactPhoneList();
  return (
    <div className={clsx(sPhoneList.root, className)}>
      <div className={sPhoneList.inner}>
        <Title
          text={t(CONTACT_DICT_FIELD.phoneTitle)}
          size="M"
          view="SECONDARY"
          className={sPhoneList.title}
        />

        <div className={sPhoneList.list}>
          {phoneList.map((item) => (
            <PhoneItem key={item.value} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
