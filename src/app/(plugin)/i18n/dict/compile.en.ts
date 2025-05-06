import { CallBackFeatureDict } from "@/feature/callback";
import { LangSwitcherDict } from "@/shared/ui/langSwitcher";
import { validateMessages } from "../domain/namespace.type";
import { HeroDict } from "@/widget/hero/";
import { ConceptDict } from "@/widget/concept/";
import { PrincipleDict } from "@/widget/principle";
import { ProjectDict } from "@/widget/project";
import { BenefitDict } from "@/widget/benefit";
import { PiplineDict } from "@/widget/pipline";

export const messages = validateMessages({
  ...LangSwitcherDict.en,
  ...HeroDict.en,
  ...CallBackFeatureDict.en,
  ...ConceptDict.en,
  ...PrincipleDict.en,
  ...ProjectDict.en,
  ...BenefitDict.en,
  ...PiplineDict.en,
} as const);
