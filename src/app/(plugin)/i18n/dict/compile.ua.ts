import { CallBackDict } from "@/feature/callback";
import { LangSwitcherDict } from "@/shared/ui/langSwitcher";
import { validateMessages } from "../domain/namespace.type";
import { HeroDict } from "@/widget/hero/domain/hero.dict";
import { ConceptDict } from "@/widget/concept";
import { PrincipleDict } from "@/widget/principle";
import { ProjectDict } from "@/widget/project";
import { BenefitDict } from "@/widget/benefit";

export const messages = validateMessages({
  ...LangSwitcherDict.ua,
  ...HeroDict.ua,
  ...CallBackDict.ua,
  ...ConceptDict.ua,
  ...PrincipleDict.ua,
  ...ProjectDict.ua,
  ...BenefitDict.ua,
} as const);
