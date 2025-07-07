"use client";
import {
  createAnimationContainerDelayed,
  createAnimationItemOpacity,
} from "@/shared/lib/animations";
import { PromoComposeContact } from "./compose/promoCompose.contact";

const PromoAnimatedItem = createAnimationItemOpacity(PromoComposeContact);

export const PromoAnimated = createAnimationContainerDelayed(PromoAnimatedItem);
