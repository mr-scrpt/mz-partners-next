import cls from "./title.module.scss";

export const TITLE_TO_CLASS = {
  base: [cls.size, cls.view],
  size: {
    S: cls.size_s,
    M: cls.size_m,
    L: cls.size_l,
    XL: cls.size_xl,
  },
  view: {
    PRIMARY: cls.view_primary,
    SECONDARY: cls.view_secondary,
  },
};
