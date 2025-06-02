import cls from "./title.module.scss";

export const TITLE_TO_CLASS = {
  size: {
    base: cls.size,
    options: { S: cls.size_s, M: cls.size_m, L: cls.size_l, XL: cls.size_xl },
  },
  view: {
    base: cls.view,
    options: {
      PRIMARY: cls.view_primary,
      PRIMARY_INVERTED: [cls.view_primary, cls.view_primary_invert],
      SECONDARY: cls.view_secondary,
    },
  },
};
