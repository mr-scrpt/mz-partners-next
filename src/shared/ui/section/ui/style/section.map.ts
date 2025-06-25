import cls from "./section.module.scss";

export const SECTION_TO_CLASS = {
  section: {
    base: cls.section,
    options: {},
  },
  width: {
    base: cls.width,
    options: {
      CONTAINER: cls.width_container,
      CONTAINER_INDENTED: cls.width_container_indented,
      OFFSET: cls.width_offset,
    },
  },
  space: {
    base: cls.space,
    options: {
      PRIMARY: cls.space_primary,
      INDENTED: cls.space_indented,
    },
  },
};
