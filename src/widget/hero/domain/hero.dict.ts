export const HERO_NAMESPACE = "Hero" as const;

export const HeroDict = {
  ua: {
    [HERO_NAMESPACE]: {
      title: "Про нас",
      description:
        "Ми вирішуємо складні юридичні питання і допомагаємознайти оптимальне рішення",
    },
  },
  en: {
    [HERO_NAMESPACE]: {
      title: "About us",
      description:
        "We solve complex legal issues and help you find the best solution",
    },
  },
} as const;
