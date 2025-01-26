// import { useLocale, useTranslations } from "next-intl";
// import { FC, HTMLAttributes } from "react";
// import { LangSwitcherSelect } from "./langSwitcherSelect";
// import { LOCALES } from "@/shared/lib/i18n/domain/type";
//
// interface LangSwitcherServerProps extends HTMLAttributes<HTMLDivElement> {}
//
// export const LangSwitcherServer: FC<LangSwitcherServerProps> = (props) => {
//   const t = useTranslations("LocaleSwitcher");
//   const locale = useLocale();
//
//   return (
//     <LangSwitcherSelect defaultValue={locale} label={t("label")}>
//       {LOCALES.map((cur) => (
//         <option key={cur} value={cur}>
//           {t("locale", { locale: cur })}
//         </option>
//       ))}
//     </LangSwitcherSelect>
//   );
// };
