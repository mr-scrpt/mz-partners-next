"use client";

import {
  createContainerGroupFade,
  createContainerGroupFadeMovement,
} from "@/shared/lib/animations";
import { InfoContact } from "./info.contact";

//
export const InfoContactAnimated = createContainerGroupFade(InfoContact);
