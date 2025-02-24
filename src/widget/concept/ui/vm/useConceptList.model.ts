import { CONCEPT_LIST } from "../../model/conceptList.model";

export const useConceptItemList = () => ({
  conceptItemList: Object.values(CONCEPT_LIST),
});
