import { callbackFormDefaultSchema } from "@/entity/callback";
import { createFormFields } from "@/shared/lib/form";
import { z } from "zod";

export const callbackFormSchema = callbackFormDefaultSchema;
export type CallbackFormValues = z.infer<typeof callbackFormSchema>;

// NOTE: DefaultValues
export const callbackDefaultFieldsValues: CallbackFormValues = {
  firstName: "",
  phoneNumber: "",
};
export const CONTACT_CREATE_FORM_FIELDS = createFormFields(callbackFormSchema);
