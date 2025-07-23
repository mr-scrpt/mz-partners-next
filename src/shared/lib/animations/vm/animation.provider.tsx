// "use client";
//
// import { FC, ReactNode, useRef } from "react";
// import { createStrictContext, useStrictContext } from "../../react";
// import { StaggerListContextValue, AnimationPresetConfig } from "../domain/type";
//
// const StaggerContext = createStrictContext<StaggerListContextValue>();
//
// export const useStagger = () => useStrictContext(StaggerContext);
//
// interface StaggerProviderProps extends AnimationPresetConfig {
//   children: ReactNode;
//   // resetTimeout?: number;
//   // delayMultiplier?: number;
//   // animationStrategy: AnimationApplicationStrategy;
// }
//
// export const StaggerProvider: FC<StaggerProviderProps> = ({
//   children,
//   resetTimeout = 200,
//   delayMultiplier = 0.1,
//   animationStrategy,
// }) => {
//   const temporalIndex = useRef(0);
//   const lastTime = useRef(0);
//
//   const requestDelay = (): number => {
//     const now = performance.now();
//     if (now - lastTime.current > resetTimeout) {
//       temporalIndex.current = 0;
//     }
//     lastTime.current = now;
//     const delay = (temporalIndex.current + 1) * delayMultiplier;
//     temporalIndex.current++;
//     return delay;
//   };
//
//   const contextValue: StaggerListContextValue = {
//     getVariants: animationStrategy,
//     requestDelay,
//   };
//
//   return (
//     <StaggerContext.Provider value={contextValue}>
//       {children}
//     </StaggerContext.Provider>
//   );
// };
