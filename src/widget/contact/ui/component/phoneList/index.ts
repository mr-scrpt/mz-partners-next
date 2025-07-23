"use client";
import { createContainerGroupItem } from "@/shared/lib/animations";
// import { createAnimationItemSlideBottom } from "@/shared/lib/animations";
import { PhoneListComposeContact } from "./compose/phoneListCompose.contact";

export const PhoneListAnimated = createContainerGroupItem(
  PhoneListComposeContact,
);
// export const PhoneListAnimated = createAnimationItemSlideBottom(
//   PhoneListComposeContact,
// );
