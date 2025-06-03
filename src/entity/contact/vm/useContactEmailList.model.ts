import { useContact } from "./useContact";

export const useContactEmailList = () => {
  const { emailList } = useContact();
  return { emailList };
};
