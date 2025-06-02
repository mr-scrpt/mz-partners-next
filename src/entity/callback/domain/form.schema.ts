import { createFormFields } from "@/shared/lib/form";

import { z } from "zod";

// NOTE: FORM
// NOTE: Main information
export const callbackFormDefaultSchema = z.object({
  firstName: z.string().nonempty(),
  phoneNumber: z.string().nonempty(),
});

export type CallbackFormDefaultValues<
  T extends z.ZodTypeAny = typeof callbackFormDefaultSchema,
> = z.infer<T>;

// NOTE: DefaultValues
export const callbackDefaultFieldsValues: CallbackFormDefaultValues = {
  firstName: "",
  phoneNumber: "",
};

// NOTE: Form fields
export const CALLBACK_FORM_FIELDS = createFormFields(callbackFormDefaultSchema);
