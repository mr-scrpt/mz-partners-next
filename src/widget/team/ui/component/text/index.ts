"use client";
import { createContainerGroupItemRef } from "@/shared/lib/animations";
// import { createAnimationItemOpacity } from "@/shared/lib/animations";
import { TextTeam } from "./text.team";

// export const TextTeamAnimated = createAnimationItemOpacity(TextTeam);
export const TextTeamAnimated = createContainerGroupItemRef(TextTeam);
