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
        <Title
          text={t(HERO_DICT_FIELD.title)}
          size="L"
          as="div"
          className={sDescription.title}
        />

        <div className={sDescription.description}>
          {t(HERO_DICT_FIELD.description)}
        </div>
      </div>
    </div>
  );
};
