import { Link } from "@/shared/lib/i18n/routing";
import { useTranslations } from "next-intl";
import { FC, HTMLAttributes } from "react";
import { HERO_DICT_FIELD, HERO_NAMESPACE } from "../../domain/hero.dict";
import { Button } from "@/shared/ui/button";

interface ActionProps extends HTMLAttributes<HTMLDivElement> {}

export const Action: FC<ActionProps> = (props) => {
  const t = useTranslations(HERO_NAMESPACE);

  return (
    <Button variant="primary-inverted">
      <Link href="#contact">{t(HERO_DICT_FIELD.actionButton)}</Link>
    </Button>
  );
};
