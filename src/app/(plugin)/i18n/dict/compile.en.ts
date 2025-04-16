import { CallBackDict } from "@/feature/callback";
import { LangSwitcherDict } from "@/shared/ui/langSwitcher";
import { validateMessages } from "../domain/namespace.type";
import { HeroDict } from "@/widget/hero/";
import { ConceptDict } from "@/widget/concept/";
import { PrincipleDict } from "@/widget/principle";
import { ProjectDict } from "@/widget/project";

export const messages = validateMessages({
  ...LangSwitcherDict.en,
  ...HeroDict.en,
  ...CallBackDict.en,
  ...ConceptDict.en,
  ...PrincipleDict.en,
  ...ProjectDict.en,
} as const);
