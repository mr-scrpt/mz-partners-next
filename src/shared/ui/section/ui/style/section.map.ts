import cls from "./section.module.scss";
export const SECTION_TO_CLASS = {
  section: {
    base: cls.section,
    options: {
      HEADER: cls.section_header,
      ROW: cls.section_row,
      FOOTER: cls.section_footer,
    },
  },
  topology: {
    base: cls.topology,
    options: {
      ROW_CONTAINER: cls.topology_rowContainer,
      ROW_FLAT: cls.topology_rowFlat,
      ROW_FULL: cls.topology_rowFull,
    },
  },
};
