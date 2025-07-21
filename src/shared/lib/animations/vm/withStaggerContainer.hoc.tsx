import { ReactNode, ComponentType, FC } from "react";
import { AnimationSelectionStrategy } from "../factory/strategy.factory";
import { StaggerProvider } from "./animation.provider";

export function withStaggerContainer<P extends { children: ReactNode }>(
  WrappedComponent: ComponentType<P>,
  strategy: AnimationSelectionStrategy,
) {
  const StaggerContainerWrapper: FC<P> = (props) => {
    return (
      // Передаем стратегию в провайдер
      <StaggerProvider strategy={strategy}>
        <WrappedComponent {...(props as P)} />
      </StaggerProvider>
    );
  };
  return StaggerContainerWrapper;
}
