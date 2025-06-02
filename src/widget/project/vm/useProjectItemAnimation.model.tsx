import { useHover } from "@/shared/lib/react";
import clsx from "clsx";
import aProjectItem from "../ui/list/item.animate.module.scss";
import { HTMLAttributes } from "react";

interface AnimationClassResult {
  rootAnimationClass: string;
  innerAnimationClass: string;
  textAnimationClass: string;
  imgAnimationClass: string;
  trigger: Partial<HTMLAttributes<HTMLElement>>;
}

export const useProjectItemAnimation = (): AnimationClassResult => {
  const { isHovered, hoverProps } = useHover();

  const rootAnimationClass = clsx(aProjectItem.animation, {
    [aProjectItem.hovered_true]: isHovered,
  });
  return {
    rootAnimationClass,
    innerAnimationClass: aProjectItem.inner,
    textAnimationClass: aProjectItem.text,
    imgAnimationClass: aProjectItem.img,
    trigger: hoverProps,
  };
};
