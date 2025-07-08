import { useState } from "react";
import clsx from "clsx";

import aItem from "../ui/component//list/item/animate.module.scss";

interface AnimationClassResult {
  orderAnimationClassName: string;
  contentAnimationClassName: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

export const useCompetencyItemAnimation = (): AnimationClassResult => {
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
