import { z } from "zod";

const configPublicSchema = z.object({
  phoneList: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      text: z.string(),
      link: z.string(),
    }),
  ),
  isDev: z.boolean(),
  API_URL_DEV: z.string(),
  API_URL_PROD: z.string(),
});

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

export type ConfigPublic = z.infer<typeof configPublicSchema>;
