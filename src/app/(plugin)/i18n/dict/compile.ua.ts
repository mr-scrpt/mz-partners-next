import { CallBackDict } from "@/feature/callback";
import { LangSwitcherDict } from "@/shared/ui/langSwitcher";
import { MenuDict } from "@/shared/ui/menu";
import { validateMessages } from "../domain/namespace.type";
import { HeroDict } from "@/widget/hero/domain/hero.dict";
import { ConceptDict } from "@/widget/concept";

export const messages = validateMessages({
  ...MenuDict.ua,
  ...LangSwitcherDict.ua,
  ...HeroDict.ua,
  ...CallBackDict.ua,
  ...ConceptDict.ua,
} as const);
