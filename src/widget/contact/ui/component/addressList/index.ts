"use client";

import { createContainerGroupItem } from "@/shared/lib/animations";
// import { createAnimationItemSlideBottom } from "@/shared/lib/animations";
import { AddressListComposeContact } from "./compose/addressListCompose.contact";

// export const AddressListAnimated = createAnimationItemSlideBottom(
//   AddressListComposeContact,
// );
//
export const AddressListAnimated = createContainerGroupItem(
  AddressListComposeContact,
);
