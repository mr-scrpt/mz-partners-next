import { useState } from "react";
import clsx from "clsx";
import aItem from "../list/item.animate.module.scss";

interface AnimationClassesResult {
  orderAnimationClassName: string;
  contentAnimationClassName: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

export const useConceptItemAnimationClass = (): AnimationClassesResult => {
  const [isOpen, setIsOpen] = useState(false);

  const orderAnimationClassName = clsx(aItem.rotating, {
    [aItem.rotating_open]: isOpen,
    [aItem.rotating_close]: !isOpen,
  });

  const contentAnimationClassName = clsx(aItem.collapsing, {
    [aItem.collapsing_open]: isOpen,
    [aItem.collapsing_close]: !isOpen,
  });

  const toggleOpen = () => setIsOpen(!isOpen);

  return {
    orderAnimationClassName,
    contentAnimationClassName,
    isOpen,
    toggleOpen,
  };
};
