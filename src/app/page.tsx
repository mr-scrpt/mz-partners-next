import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/routing";
// import { setRequestLocale } from "next-intl/server";
import { LocaleParam } from "@/i18n/domain/type";

// interface HomePageProps {
//   params: LocaleParam;
// }

export default function HomePage() {
  const locale = useTranslations();
  console.log("output_log: LOCAL =>>>", locale);

  // setRequestLocale(locale);
  // const t = useTranslations("HomePage");

  return (
    <div>
      {/* <h1>{t("title")}</h1> */}
      {/* <Link href="/about">{t("about")}</Link> */}
    </div>
  );
}
