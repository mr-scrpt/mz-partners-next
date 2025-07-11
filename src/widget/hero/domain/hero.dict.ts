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
      [HERO_DICT_FIELD.title]: "Ваша юридична безпека – наша місія",
      [HERO_DICT_FIELD.description]:
        "Наше адвокатське обєднання – це надійний юридичний партнер у вирішенні складних питань. Ми впевнені, що захистимо ваші права та інтереси професійно і ефективно.",
      [HERO_DICT_FIELD.actionButton]: "Зв'язатися з нами",
    },
  },
  en: {
    [HERO_NAMESPACE]: {
      [HERO_DICT_FIELD.title]: "Your legal security is our mission",
      [HERO_DICT_FIELD.description]:
        "Our legal association is a reliable legal partner in resolving complex issues. We are confident that we will protect your rights and interests professionally and effectively.",
      [HERO_DICT_FIELD.actionButton]: "Contact us",
    },
  },
} as const;
