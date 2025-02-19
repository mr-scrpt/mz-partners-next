import cls from "./titleSection.module.scss";
export const TITLE_SECTION_TO_CLASS = {
  position: {
    base: cls.position,
    options: {
      LEFT: cls.position_left,
      CENTER: cls.position_center,
      RIGHT: cls.position_right,
    },
  },
  deco_line: {
    base: [cls.deco, cls.deco_line],
    options: {
      LEFT: cls.deco_line_left,
      CENTER: cls.deco_line_center,
      RIGHT: cls.deco_line_right,
    },
  },
  view: {
    base: cls.view,
    options: { PRIMARY: cls.view_primary, SECONDARY: cls.view_secondary },
  },

  size: {
    base: cls.size,
    options: { S: cls.size_s, M: cls.size_m, L: cls.size_l, XL: cls.size_xl },
  },
};
