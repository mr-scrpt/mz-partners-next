import { AddressListModule, PhoneListModule } from "@/entity/contact";
import { useTranslations } from "next-intl";
import { FC, HTMLAttributes } from "react";
import { FOOTER_DICT_FIELD, FOOTER_NAMESPACE } from "../../domain/benefit.dict";
import sContactFooter from "./contact.footer.module.scss";

interface ContactFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactFooter: FC<ContactFooterProps> = (props) => {
  const t = useTranslations(FOOTER_NAMESPACE);
  return (
    <div className={sContactFooter.root}>
      <div className={sContactFooter.inner}>
        <div className={sContactFooter.row}>
          <div className={sContactFooter.title}>
            {t(FOOTER_DICT_FIELD.contact_phone_title)}
          </div>
          <div className={sContactFooter.content}>
            <PhoneListModule />
          </div>
        </div>

        <div className={sContactFooter.row}>
          <div className={sContactFooter.title}>
            {t(FOOTER_DICT_FIELD.contact_address_title)}
          </div>
          <div className={sContactFooter.content}>
            <AddressListModule />
          </div>
        </div>
      </div>
    </div>
  );
};
