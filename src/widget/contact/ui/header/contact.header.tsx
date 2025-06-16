import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sContactHeader from "./contact.header.module.scss";
import { useTranslations } from "next-intl";
import { CONTACT_NAMESPACE } from "../../domain/contact.dict";
interface ContactHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactHeader: FC<ContactHeaderProps> = (props) => {
  const { className } = props;
  const t = useTranslations(CONTACT_NAMESPACE);
  return (
    <div className={clsx(sContactHeader.root, className)}>
      <div className={sContactHeader.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY_INVERTED"
          className={sContactHeader.title}
        />
      </div>
    </div>
  );
};
