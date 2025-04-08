import { CallBackDict } from "@/feature/callback";
import { LangSwitcherDict } from "@/shared/ui/langSwitcher";
import { MenuDict } from "@/shared/ui/menu";
import { validateMessages } from "../domain/namespace.type";
import { HeroDict } from "@/widget/hero/";
import { ConceptDict } from "@/widget/concept/";
import { PrincipleDict } from "@/widget/principle";

export const messages = validateMessages({
  ...MenuDict.en,
  ...LangSwitcherDict.en,
  ...HeroDict.en,
  ...CallBackDict.en,
  ...ConceptDict.en,
  ...PrincipleDict.en,
} as const);
