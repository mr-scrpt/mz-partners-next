import { SocialListItem } from "../domain/socialList.type";

const socialList = ["inta", "fb", "email"] as const;

export const SOCIAL_LIST = {
  inta: {
    id: 1,
    name: "instagram",
    shortName: "inta",
    link: "1https://t.me/inta",
    icon: "INSTA",
  },

  fb: {
    id: 2,
    name: "facebook",
    shortName: "fb",
    link: "2https://t.me/inta",
    icon: "FB",
  },
  email: {
    id: 3,
    name: "email",
    shortName: "email",
    link: "3https://t.me/inta",
    icon: "EMAIL",
  },
} satisfies Record<(typeof socialList)[number], SocialListItem>;
