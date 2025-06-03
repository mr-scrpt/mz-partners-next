import { useContact } from "./useContact";

export const useContactPhoneList = () => {
  const { phoneList } = useContact();
  return { phoneList };
};
