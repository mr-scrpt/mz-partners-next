import { configContactSchema } from "./domain/config.schema";

export const configContact = configContactSchema.parse({
  phoneList: [
    {
      id: "1",
      type: "primary",
      text: "+38 (099) 000-00-00",
    },

    {
      id: "2",
      type: "secondary",
      text: "+38 (066) 000-00-00",
    },
  ],
  email: ["iOY6d@example.com"],
  addressList: ["г. Киев, ул. Пушкина, 1"],
});
