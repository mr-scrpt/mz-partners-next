import { CallBackEntityDict } from "@/entity/callback";
import { CallBackFeatureDict } from "@/feature/callback";
import { LangSwitcherDict } from "@/shared/ui/langSwitcher";
import { AboutDict } from "@/widget/about";
import { BenefitDict } from "@/widget/benefit";
import { CallBackWidgetDict } from "@/widget/callback";
import { CompetencyDict } from "@/widget/competency";
import { FooterDict } from "@/widget/footer";
import { HeroDict } from "@/widget/hero/domain/hero.dict";
import { HistoryDict } from "@/widget/history";
import { PiplineDict } from "@/widget/pipline";
import { PrincipleDict } from "@/widget/principle";
import { ProjectDict } from "@/widget/project";
import { TeamDict } from "@/widget/team";
import { validateMessages } from "../domain/namespace.type";
import { ContactDict } from "@/widget/contact";

export const messages = validateMessages({
  ...LangSwitcherDict.ua,
  ...HeroDict.ua,
  ...CallBackEntityDict.ua,
  ...CallBackFeatureDict.ua,
  ...CallBackWidgetDict.ua,
  ...CompetencyDict.ua,
  ...PrincipleDict.ua,
  ...ProjectDict.ua,
  ...BenefitDict.ua,
  ...PiplineDict.ua,
  ...FooterDict.ua,
  ...AboutDict.ua,
  ...HistoryDict.ua,
  ...TeamDict.ua,
  ...ContactDict.ua,
} as const);
