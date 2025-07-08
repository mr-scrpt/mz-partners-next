"use client";
import {
  createAnimationContainerImmediately,
  createAnimationItemOpacity,
} from "@/shared/lib/animations";
import { PromoComposeContact } from "./compose/promoCompose.contact";

const PromoAnimatedItem = createAnimationItemOpacity(PromoComposeContact);

export const PromoAnimated =
  createAnimationContainerImmediately(PromoAnimatedItem);
