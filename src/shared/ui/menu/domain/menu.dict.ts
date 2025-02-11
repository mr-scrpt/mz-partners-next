export const MENU_NAMESPACE = "Menu" as const;

export const MENU_DICT_FIELD = {
  about: "menu-item-about" as const,
  conception: "menu-item-conception" as const,
  command: "menu-item-command" as const,
  projects: "menu-item-projects" as const,
  career: "menu-item-career" as const,
  news: "menu-item-news" as const,
} as const;

export type MenuDictField = keyof typeof MENU_DICT_FIELD;

export const MenuDict = {
  ua: {
    [MENU_NAMESPACE]: {
      [MENU_DICT_FIELD.about]: "Про нас",
      [MENU_DICT_FIELD.conception]: "Концепція",
      [MENU_DICT_FIELD.command]: "Команда",
      [MENU_DICT_FIELD.projects]: "Проєкти",
      [MENU_DICT_FIELD.career]: "Кар'єра",
      [MENU_DICT_FIELD.news]: "Новини",
    },
  },
  en: {
    [MENU_NAMESPACE]: {
      [MENU_DICT_FIELD.about]: "About",
      [MENU_DICT_FIELD.conception]: "Conception",
      [MENU_DICT_FIELD.command]: "Command",
      [MENU_DICT_FIELD.projects]: "Projects",
      [MENU_DICT_FIELD.career]: "Career",
      [MENU_DICT_FIELD.news]: "News",
    },
  },
} as const;
