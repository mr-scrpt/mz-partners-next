import cls from "./titleSection.module.scss";
export const TITLE_SECTION_TO_CLASS = {
  position: {
    LEFT: cls.position_left,
    CENTER: cls.position_center,
    RIGHT: cls.position_right,
  },
  deco_line: {
    LEFT: cls.deco_line_left,
    CENTER: cls.deco_line_center,
    RIGHT: cls.deco_line_right,
  },
  view: {
    PRIMARY: cls.view_primary,
    SECONDARY: cls.view_secondary,
  },

  size: {
    S: cls.size_s,
    M: cls.size_m,
    L: cls.size_l,
    XL: cls.size_xl,
  },
};
