import { RefObject, useEffect, useRef, useState } from "react";

interface UseMenuReturn<T extends HTMLElement> {
  isOpen: boolean;
  isInit: boolean;
  menuRef: RefObject<T>;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
}

export function useMenu<T extends HTMLElement>(
  initialState = false,
): UseMenuReturn<T> {
  const [isOpen, setIsOpen] = useState(initialState);
  const [isInit, setIsInit] = useState(true);
  const menuRef = useRef<T>(null) as RefObject<T>;

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const menuElement = menuRef.current;
    if (!menuElement) return;

    const handleItemClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("[data-menu-control]")) {
        setIsOpen(false);
      }
    };

    menuElement.addEventListener("click", handleItemClick);

    return () => {
      menuElement.removeEventListener("click", handleItemClick);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setIsInit(false);
  };
  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  return {
    isOpen,
    isInit,
    menuRef,
    toggleMenu,
    closeMenu,
    openMenu,
  };
}
