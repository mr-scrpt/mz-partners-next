import { CallBackDict } from "@/feature/callback";
import { LangSwitcherDict } from "@/shared/ui/langSwitcher";
import { MenuDict } from "@/shared/ui/menu";
import { validateMessages } from "../domain/namespace.type";

export const messages = validateMessages({
  ...MenuDict.ua,
  ...LangSwitcherDict.ua,
  ...CallBackDict.ua,
} as const);
