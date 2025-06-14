import { CALLBACK_ENTITY_NAMESPACE } from "@/entity/callback";
import { CALLBACK_FEATURE_NAMESPACE } from "@/feature/callback";
import { LANG_SWITCHER_NAMESPACE } from "@/shared/ui/langSwitcher";
import { ABOUT_NAMESPACE } from "@/widget/about";
import { BENEFIT_NAMESPACE } from "@/widget/benefit";
import { CALLBACK_WIDGET_NAMESPACE } from "@/widget/callback";
import { CONCEPT_NAMESPACE } from "@/widget/concept";
import { FOOTER_NAMESPACE } from "@/widget/footer";
import { HERO_NAMESPACE } from "@/widget/hero";
import { HISTORY_NAMESPACE } from "@/widget/history";
import { PIPLINE_NAMESPACE } from "@/widget/pipline";
import { PRINCIPLE_NAMESPACE } from "@/widget/principle";
import { PROJECT_NAMESPACE } from "@/widget/project";
import { TEAM_NAMESPACE } from "@/widget/team";

export const NAMESPACE_LIST = [
  CALLBACK_ENTITY_NAMESPACE,
  CALLBACK_FEATURE_NAMESPACE,
  CALLBACK_WIDGET_NAMESPACE,
  LANG_SWITCHER_NAMESPACE,
  HERO_NAMESPACE,
  CONCEPT_NAMESPACE,
  PRINCIPLE_NAMESPACE,
  PROJECT_NAMESPACE,
  BENEFIT_NAMESPACE,
  PIPLINE_NAMESPACE,
  FOOTER_NAMESPACE,
  ABOUT_NAMESPACE,
  HISTORY_NAMESPACE,
  TEAM_NAMESPACE,
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
