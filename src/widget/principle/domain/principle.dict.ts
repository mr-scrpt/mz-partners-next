export const PRINCIPLE_NAMESPACE = "Principle" as const;

export const PRINCIPLE_DICT_FIELD = {
  title: "title",

  // Confidential
  confidentialTitle: "confidential-title",
  confidentialDescription: "confidential-description",

  // Privat
  privatTitle: "privat-title",
  privatDescription: "privat-description",

  // Competency
  competencyTitle: "competency-title",
  competencyDescription: "competency-description",

  // Complexity
  complexityTitle: "complexity-title",
  complexityDescription: "complexity-description",
} as const;

export type PrincipleDictField = keyof typeof PRINCIPLE_DICT_FIELD;

export const PrincipleDict = {
  ua: {
    [PRINCIPLE_NAMESPACE]: {
      [PRINCIPLE_DICT_FIELD.title]: "Наші принципи",
      // Confidential
      [PRINCIPLE_DICT_FIELD.confidentialTitle]: "Конфіденціальність",
      [PRINCIPLE_DICT_FIELD.confidentialDescription]:
        "Ми гарантуємо повну конфіденціальність інформації наших клієнтів. Захист даних є нашим пріоритетом у всіх аспектах співпраці.",

      // Privat
      [PRINCIPLE_DICT_FIELD.privatTitle]: "Приватність клієнтів",
      [PRINCIPLE_DICT_FIELD.privatDescription]:
        "Ми поважаємо приватність наших клієнтів та забезпечуємо надійний захист їхніх особистих даних. Кожен клієнт може бути впевнений у безпеці своєї інформації.",

      // Competency
      [PRINCIPLE_DICT_FIELD.competencyTitle]: "Компетентність",
      [PRINCIPLE_DICT_FIELD.competencyDescription]:
        "Наша команда складається з висококваліфікованих фахівців з багаторічним досвідом. Ми постійно вдосконалюємо свої знання та навички для надання послуг найвищої якості.",

      // Complexity
      [PRINCIPLE_DICT_FIELD.complexityTitle]: "Комплексність",
      [PRINCIPLE_DICT_FIELD.complexityDescription]:
        "Ми пропонуємо комплексний підхід до вирішення завдань наших клієнтів. Наші рішення враховують усі аспекти та нюанси кожної конкретної ситуації.",
    },
  },
  en: {
    [PRINCIPLE_NAMESPACE]: {
      [PRINCIPLE_DICT_FIELD.title]: "Our Principles",
      // Confidential
      [PRINCIPLE_DICT_FIELD.confidentialTitle]: "Confidentiality",
      [PRINCIPLE_DICT_FIELD.confidentialDescription]:
        "We guarantee complete confidentiality of our clients' information. Data protection is our priority in all aspects of cooperation.",

      // Privat
      [PRINCIPLE_DICT_FIELD.privatTitle]: "Client Privacy",
      [PRINCIPLE_DICT_FIELD.privatDescription]:
        "We respect the privacy of our clients and ensure reliable protection of their personal data. Each client can be confident in the security of their information.",

      // Competency
      [PRINCIPLE_DICT_FIELD.competencyTitle]: "Competence",
      [PRINCIPLE_DICT_FIELD.competencyDescription]:
        "Our team consists of highly qualified professionals with years of experience. We constantly improve our knowledge and skills to provide services of the highest quality.",

      // Complexity
      [PRINCIPLE_DICT_FIELD.complexityTitle]: "Complexity",
      [PRINCIPLE_DICT_FIELD.complexityDescription]:
        "We offer a comprehensive approach to solving our clients' tasks. Our solutions take into account all aspects and nuances of each specific situation.",
    },
  },
} as const;
