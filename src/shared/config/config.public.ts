import { configPublicSchema } from "./domain/config.schema";

export const configPublic = configPublicSchema.parse({
  phoneList: [
    {
      id: "1",
      title: "Мобильный",
      text: "+7 (495) 123-45-67",
      link: "tel:+7 (495) 123-45-67",
    },
    {
      id: "2",
      title: "Почта",
      text: "iOY6d@example.com",
      link: "mailto:iOY6d@example.com",
    },
  ],
  isDev: process.env.NEXT_PUBLIC_APP_ENV === "development",
  API_URL_DEV: process.env.NEXT_PUBLIC_API_URL_DEV,
  API_URL_PROD: process.env.NEXT_PUBLIC_API_URL_PROD,
});
