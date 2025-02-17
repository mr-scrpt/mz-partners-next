import { RefObject, useEffect, useRef, useState } from "react";

interface UseMenuReturn<T extends HTMLElement> {
  isOpen: boolean;
  menuRef: RefObject<T>;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
}

export function useMenu<T extends HTMLElement>(
  initialState = false,
): UseMenuReturn<T> {
  const [isOpen, setIsOpen] = useState(initialState);
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

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  return {
    isOpen,
    menuRef,
    toggleMenu,
    closeMenu,
    openMenu,
  };
}
