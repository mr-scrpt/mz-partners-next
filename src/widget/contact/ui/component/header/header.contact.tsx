import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sHeaderContact from "./header.contact.module.scss";
import { useTranslations } from "next-intl";
import { CONTACT_NAMESPACE } from "../../../domain/contact.dict";
interface ContactHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderContact: FC<ContactHeaderProps> = (props) => {
  const { className } = props;
  const t = useTranslations(CONTACT_NAMESPACE);
  return (
    <div className={clsx(sHeaderContact.root, className)}>
      <div className={sHeaderContact.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sHeaderContact.title}
        />
      </div>
    </div>
  );
};
