export const CONCEPT_NAMESPACE = "Concept" as const;

export const CONCEPT_DICT_FIELD = {
  title: "title",

  // Jurisprudence
  jurTitle: "jur-title",
  jurDescription: "jur-description",

  // Bankruptcy
  bankruptcyTitle: "bankruptcy-title",
  bankruptcyDescription: "bankruptcy-description",

  // Invest
  investTitle: "invest-title",
  investDescription: "invest-description",

  // Bank
  bankTitle: "bank-title",
  bankDescription: "bank-description",

  // Privacy
  privacyTitle: "privacy-title",
  privacyDescription: "privacy-description",
} as const;

export type ConceptDictField = keyof typeof CONCEPT_DICT_FIELD;

export const ConceptDict = {
  ua: {
    [CONCEPT_NAMESPACE]: {
      [CONCEPT_DICT_FIELD.title]: "Концепція",
      // Jurisprudence
      [CONCEPT_DICT_FIELD.jurTitle]: "Судова практика",
      [CONCEPT_DICT_FIELD.jurDescription]:
        "Ми маємо великий досвід представництва інтересів клієнтів у судах всіх інстанцій. Наша команда забезпечує комплексний супровід судових справ будь-якої складності та спеціалізації.",

      // Bankruptcy
      [CONCEPT_DICT_FIELD.bankruptcyTitle]: "Банкрутство і реструктуризація",
      [CONCEPT_DICT_FIELD.bankruptcyDescription]:
        "Надаємо повний спектр послуг у сфері банкрутства та відновлення платоспроможності. Допомагаємо знайти оптимальні рішення для реструктуризації бізнесу та захисту активів.",

      // Invest
      [CONCEPT_DICT_FIELD.investTitle]: "Інвестиції в стресові активи",
      [CONCEPT_DICT_FIELD.investDescription]:
        "Супроводжуємо угоди з придбання проблемних активів та забезпечуємо юридичний захист інвестицій. Допомагаємо оцінити ризики та розробити стратегію управління стресовими активами.",

      // Bank
      [CONCEPT_DICT_FIELD.bankTitle]: "Банківське і фінансове право",
      [CONCEPT_DICT_FIELD.bankDescription]:
        "Консультуємо з питань банківського регулювання та фінансових операцій. Забезпечуємо юридичний супровід кредитних відносин та структурування фінансових інструментів.",

      // Privacy
      [CONCEPT_DICT_FIELD.privacyTitle]: "Приватні клієнти",
      [CONCEPT_DICT_FIELD.privacyDescription]:
        "Надаємо персональні консультації та забезпечуємо конфіденційний супровід приватних справ. Допомагаємо у вирішенні складних юридичних питань з урахуванням індивідуальних потреб клієнта.",
    },
  },
  en: {
    [CONCEPT_NAMESPACE]: {
      [CONCEPT_DICT_FIELD.title]: "Concept",

      // Jurisprudence
      [CONCEPT_DICT_FIELD.jurTitle]: "Legal Support",
      [CONCEPT_DICT_FIELD.jurDescription]:
        "We have extensive experience in representing clients' interests in courts of all instances. Our team provides comprehensive support for legal cases of any complexity and specialization.",

      // Bankruptcy
      [CONCEPT_DICT_FIELD.bankruptcyTitle]: "Bankruptcy and Restructuring",
      [CONCEPT_DICT_FIELD.bankruptcyDescription]:
        "We provide a full range of services in bankruptcy and solvency restoration. We help find optimal solutions for business restructuring and asset protection.",

      // Invest
      [CONCEPT_DICT_FIELD.investTitle]: "Investments",
      [CONCEPT_DICT_FIELD.investDescription]:
        "We support transactions for the acquisition of distressed assets and provide legal protection for investments. We help assess risks and develop strategies for managing distressed assets.",

      // Bank
      [CONCEPT_DICT_FIELD.bankTitle]: "Banking and Financial Law",
      [CONCEPT_DICT_FIELD.bankDescription]:
        "We consult on banking regulations and financial operations. We provide legal support for credit relations and structuring of financial instruments.",

      // Privacy
      [CONCEPT_DICT_FIELD.privacyTitle]: "Privacy",
      [CONCEPT_DICT_FIELD.privacyDescription]:
        "We provide personal consultations and ensure confidential support for private matters. We help resolve complex legal issues taking into account individual client needs.",
    },
  },
} as const;
