import { z } from "zod";

export const configContactSchema = z.object({
  phoneList: z.array(
    z.object({
      id: z.string(),
      type: z.string(),
      text: z.string(),
    }),
  ),
  emailList: z.array(z.string()),
});

const configEnvSchema = z.object({
  isDev: z.boolean(),
  API_URL_DEV: z.string(),
  API_URL_PROD: z.string(),
});

export const configPublicSchema = z.object({
  ...configContactSchema.shape,
  ...configEnvSchema.shape,
});

export type ConfigPublic = z.infer<typeof configPublicSchema>;
