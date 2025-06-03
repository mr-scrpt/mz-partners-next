import { useContact } from "./useContact";

export const useContactAddressList = () => {
  const { addressList } = useContact();
  return { addressList };
};
