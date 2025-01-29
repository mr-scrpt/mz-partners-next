import { SectionTopology } from "../../domain/topology.type";
import cls from "./section.module.scss";
export const section_class = {
  topology: {
    ROW_CONTAINER: cls.rowContainer,
    ROW_FLAT: cls.rowFlat,
    ROW_FULL: cls.rowFull,
  } satisfies Record<SectionTopology, string>,
};
