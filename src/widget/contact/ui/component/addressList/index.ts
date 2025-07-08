"use client";

import { createAnimationItemSlideBottom } from "@/shared/lib/animations";
import { AddressListComposeContact } from "./compose/addressListCompose.contact";

export const AddressListAnimated = createAnimationItemSlideBottom(
  AddressListComposeContact,
);
