import { CallBackFeatureDict } from "@/feature/callback";
import { LangSwitcherDict } from "@/shared/ui/langSwitcher";
import { validateMessages } from "../domain/namespace.type";
import { HeroDict } from "@/widget/hero/domain/hero.dict";
import { ConceptDict } from "@/widget/concept";
import { PrincipleDict } from "@/widget/principle";
import { ProjectDict } from "@/widget/project";
import { BenefitDict } from "@/widget/benefit";
import { PiplineDict } from "@/widget/pipline";
import { CallBackEntityDict } from "@/entity/callback";
import { CallBackWidgetDict } from "@/widget/callback";
import { FooterDict } from "@/widget/footer";
import { AboutDict } from "@/widget/about";
import { HistoryDict } from "@/widget/history";

export const messages = validateMessages({
  ...LangSwitcherDict.ua,
  ...HeroDict.ua,
  ...CallBackEntityDict.ua,
  ...CallBackFeatureDict.ua,
  ...CallBackWidgetDict.ua,
  ...ConceptDict.ua,
  ...PrincipleDict.ua,
  ...ProjectDict.ua,
  ...BenefitDict.ua,
  ...PiplineDict.ua,
  ...FooterDict.ua,
  ...AboutDict.ua,
  ...HistoryDict.ua,
} as const);
