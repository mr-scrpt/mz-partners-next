import { CallBackEntityDict } from "@/entity/callback";
import { CallBackFeatureDict } from "@/feature/callback";
import { LangSwitcherDict } from "@/shared/ui/langSwitcher";
import { AboutDict } from "@/widget/about";
import { BenefitDict } from "@/widget/benefit";
import { CallBackWidgetDict } from "@/widget/callback";
import { CompetencyDict } from "@/widget/competency";
import { FooterDict } from "@/widget/footer";
import { HeroDict } from "@/widget/hero/";
import { HistoryDict } from "@/widget/history";
import { PiplineDict } from "@/widget/pipline";
import { PrincipleDict } from "@/widget/principle";
import { ProjectDict } from "@/widget/project";
import { TeamDict } from "@/widget/team";
import { validateMessages } from "../domain/namespace.type";
import { ContactDict } from "@/widget/contact";

export const messages = validateMessages({
  ...LangSwitcherDict.en,
  ...HeroDict.en,
  ...CallBackEntityDict.en,
  ...CallBackFeatureDict.en,
  ...CallBackWidgetDict.en,
  ...CompetencyDict.en,
  ...PrincipleDict.en,
  ...ProjectDict.en,
  ...BenefitDict.en,
  ...PiplineDict.en,
  ...FooterDict.en,
  ...AboutDict.en,
  ...HistoryDict.en,
  ...TeamDict.en,
  ...ContactDict.en,
} as const);
