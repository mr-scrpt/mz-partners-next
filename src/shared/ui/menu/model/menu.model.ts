import { MenuItem } from "../domain/menu.type";

export const MENU_DATA: Record<string, MenuItem> = {
  about: {
    id: 1,
    tag: "about",
    href: "/about",
  },
  conception: {
    id: 2,
    tag: "conception",
    href: "/conception",
  },
  command: {
    id: 3,
    tag: "command",
    href: "/command",
  },
  projects: {
    id: 4,
    tag: "projects",
    href: "/projects",
  },
  career: {
    id: 5,
    tag: "career",
    href: "/career",
  },
  news: {
    id: 6,
    tag: "news",
    href: "/news",
  },
};
