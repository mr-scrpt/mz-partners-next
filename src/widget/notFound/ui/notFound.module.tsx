import { NotFound } from "@/shared/ui/notFound/ui/notFound";
import { useTranslations } from "next-intl";
import { FC, HTMLAttributes } from "react";

interface NotFoundModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const NotFoundModule: FC<NotFoundModuleProps> = (props) => {
  // const t = useTranslations("NotFoundPage");

  // return <NotFound title={t("title")} text={t("text")} {...props} />;
  return <NotFound title={"text"} text={"text"} {...props} />;
};
