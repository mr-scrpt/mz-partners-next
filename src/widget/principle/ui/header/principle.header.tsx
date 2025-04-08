import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sPrincipleHeader from "./principle.header.module.scss";
import { useTranslations } from "next-intl";
import { PRINCIPLE_NAMESPACE } from "../../domain/principle.dict";
interface PrincipleHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const PrincipleHeader: FC<PrincipleHeaderProps> = (props) => {
  const { className } = props;
  const t = useTranslations(PRINCIPLE_NAMESPACE);
  return (
    <div className={clsx(sPrincipleHeader.root, className)}>
      <div className={sPrincipleHeader.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY_INVERTED"
          className={sPrincipleHeader.title}
        />
      </div>
    </div>
  );
};
