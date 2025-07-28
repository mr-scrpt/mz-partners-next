import { createStrictContext, useStrictContext } from "@/shared/lib/react";
import { AnimationContextValue } from "../domain/type";

export const AnimationContext = createStrictContext<AnimationContextValue>();
export const AnimationProvider = AnimationContext.Provider;
export const useAnimationContext = () => useStrictContext(AnimationContext);
