"use client";
import { motion } from "framer-motion";
import {
  Children,
  ComponentType,
  isValidElement,
  PropsWithChildren,
} from "react";

type ComponentCustomProps<P extends object> = PropsWithChildren<P> & {
  options: {
    skipAnimation: boolean;
  };
};

function propsHaveOptions<P extends object>(
  props: unknown,
): props is ComponentCustomProps<P> {
  return (
    typeof props === "object" &&
    props !== null &&
    "options" in props &&
    typeof (props as any).options === "object" &&
    (props as any).options !== null &&
    typeof (props as any).options.skipAnimation === "boolean"
  );
}

export const withChildernLayout = <P extends object>(
  WrappedComponent: ComponentType<P>,
) => {
  const WrapperComponent = (props: PropsWithChildren<P>) => {
    const { children } = props;

    const modifiedChildren = Children.map(children, (child) => {
      if (isValidElement(child) && propsHaveOptions(child.props)) {
        const props = child.props;
        const { options } = props;
        if (options.skipAnimation) {
          return child;
        }
      }
      return <motion.div>{child}</motion.div>;
    });

    return (
      <WrappedComponent {...(props as P)}>{modifiedChildren}</WrappedComponent>
    );
  };

  return WrapperComponent;
};

export const withCustomProps = <P extends object>(
  WrappedComponent: ComponentType<P>,
) => {
  const WrapperComponent = (
    props: PropsWithChildren<ComponentCustomProps<P>>,
  ) => {
    return <WrappedComponent {...(props as P)} />;
  };

  return WrapperComponent;
};
