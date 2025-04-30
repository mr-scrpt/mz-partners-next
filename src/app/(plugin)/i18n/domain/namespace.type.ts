import { CALLBACK_NAMESPACE } from "@/feature/callback";
import { LANG_SWITCHER_NAMESPACE } from "@/shared/ui/langSwitcher";
import { BENEFIT_NAMESPACE } from "@/widget/benefit";
import { CONCEPT_NAMESPACE } from "@/widget/concept";
import { HERO_NAMESPACE } from "@/widget/hero";
import { PIPLINE_NAMESPACE } from "@/widget/pipline";
import { PRINCIPLE_NAMESPACE } from "@/widget/principle";
import { PROJECT_NAMESPACE } from "@/widget/project";

export const NAMESPACE_LIST = [
  CALLBACK_NAMESPACE,
  LANG_SWITCHER_NAMESPACE,
  HERO_NAMESPACE,
  CONCEPT_NAMESPACE,
  PRINCIPLE_NAMESPACE,
  PROJECT_NAMESPACE,
  BENEFIT_NAMESPACE,
  PIPLINE_NAMESPACE,
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
