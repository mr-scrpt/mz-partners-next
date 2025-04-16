import { MenuItem } from "../domain/menu.type";

export const MENU_DATA: Record<string, Array<MenuItem>> = {
  ua: [
    {
      id: 1,
      title: "Про нас",
      href: "/about",
    },
    {
      id: 2,
      title: "Концепція",
      href: "/conception",
    },
    {
      id: 3,
      title: "Команда",
      href: "/command",
    },
    {
      id: 4,
      title: "Проєкти",
      href: "/projects",
    },
    {
      id: 5,
      title: "Кар'єра",
      href: "/career",
    },
    {
      id: 6,
      title: "Новини",
      href: "/news",
    },
  ],
  en: [
    {
      id: 1,
      title: "About",
      href: "/about",
    },
    {
      id: 2,
      title: "Conception",
      href: "/conception",
    },
    {
      id: 3,
      title: "Command",
      href: "/command",
    },
    {
      id: 4,
      title: "Projects",
      href: "/projects",
    },
    {
      id: 5,
      title: "Career",
      href: "/career",
    },
    {
      id: 6,
      title: "News",
      href: "/news",
    },
  ],
};
