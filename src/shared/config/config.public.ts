import { configPublicSchema } from "./domain/config.schema";

export const configPublic = configPublicSchema.parse({
  isDev: process.env.NEXT_PUBLIC_APP_ENV === "development",
  API_URL_DEV: process.env.NEXT_PUBLIC_API_URL_DEV,
  API_URL_PROD: process.env.NEXT_PUBLIC_API_URL_PROD,
});
