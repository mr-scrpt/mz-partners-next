export const HERO_NAMESPACE = "Hero" as const;

export const HERO_DICT_FIELD = {
  title: "title" as const,
  description: "description" as const,
  actionButton: "actionButton" as const,
};

export type HeroDictField = keyof typeof HERO_DICT_FIELD;

export const HeroDict = {
  ua: {
    [HERO_NAMESPACE]: {
      [HERO_DICT_FIELD.title]: "Про нас",
      [HERO_DICT_FIELD.description]:
        "Ми вирішуємо складні юридичні питання і допомагаємо знайти оптимальне рішення",
      [HERO_DICT_FIELD.actionButton]: "Зв'язатися з нами",
    },
  },
  en: {
    [HERO_NAMESPACE]: {
      [HERO_DICT_FIELD.title]: "About us",
      [HERO_DICT_FIELD.description]:
        "We solve complex legal issues and help you find the best solution",
      [HERO_DICT_FIELD.actionButton]: "Contact us",
    },
  },
} as const;
