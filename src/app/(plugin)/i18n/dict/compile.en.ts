import { CallBackEntityDict } from "@/entity/callback";
import { CallBackFeatureDict } from "@/feature/callback";
import { CallBackWidgetDict } from "@/widget/callback";
import { LangSwitcherDict } from "@/shared/ui/langSwitcher";
import { validateMessages } from "../domain/namespace.type";
import { HeroDict } from "@/widget/hero/";
import { ConceptDict } from "@/widget/concept/";
import { PrincipleDict } from "@/widget/principle";
import { ProjectDict } from "@/widget/project";
import { BenefitDict } from "@/widget/benefit";
import { PiplineDict } from "@/widget/pipline";
import { FooterDict } from "@/widget/footer";
import { AboutDict } from "@/widget/about";

export const messages = validateMessages({
  ...LangSwitcherDict.en,
  ...HeroDict.en,
  ...CallBackEntityDict.en,
  ...CallBackFeatureDict.en,
  ...CallBackWidgetDict.en,
  ...ConceptDict.en,
  ...PrincipleDict.en,
  ...ProjectDict.en,
  ...BenefitDict.en,
  ...PiplineDict.en,
  ...FooterDict.en,
  ...AboutDict.en,
} as const);
