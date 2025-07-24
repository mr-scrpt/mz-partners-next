"use client";

import { createContainerGroupItem } from "@/shared/lib/animations";
// import { createAnimationItemSlideBottom } from "@/shared/lib/animations";
import { AdditionalListComposeContact } from "./compose/additionalListCompose.contact";

// export const AdditionalListAnimated = createAnimationItemSlideBottom(
//   AdditionalListComposeContact,
// );
export const AdditionalListAnimated = createContainerGroupItem(
  AdditionalListComposeContact,
);
