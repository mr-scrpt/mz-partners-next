import { CALLBACK_NAMESPACE } from "@/feature/callback";
import { LANG_SWITCHER_NAMESPACE } from "@/shared/ui/langSwitcher";
import { MENU_NAMESPACE } from "@/shared/ui/menu";
import { HERO_NAMESPACE } from "@/widget/hero";

export const NAMESPACE_LIST = [
  CALLBACK_NAMESPACE,
  MENU_NAMESPACE,
  LANG_SWITCHER_NAMESPACE,
  HERO_NAMESPACE,
] as const;

export type Namespace = (typeof NAMESPACE_LIST)[number];

export type StrictSchema<T> = keyof T extends Namespace
  ? Namespace extends keyof T
    ? T
    : never
  : never;

export function validateMessages<T>(messages: StrictSchema<T>): T {
  return messages;
}
