import { useTranslations } from "next-intl";
import { FC, HTMLAttributes } from "react";
import { HERO_DICT_FIELD, HERO_NAMESPACE } from "../../domain/hero.dict";
import sDescription from "./description.module.scss";
import { Title } from "@/shared/ui/title";

interface DescriptionProps extends HTMLAttributes<HTMLDivElement> {}

export const Description: FC<DescriptionProps> = (props) => {
  const t = useTranslations(HERO_NAMESPACE);

  return (
    <div className={sDescription.root}>
      <div className={sDescription.inner}>
        <div className={sDescription.title}>{t("title")}</div>
        <Title
          text="Title"
          size="S"
          className={t(HERO_DICT_FIELD.title)}
          as="div"
        />

        <div className={sDescription.description}>{t("description")}</div>
      </div>
    </div>
  );
};
