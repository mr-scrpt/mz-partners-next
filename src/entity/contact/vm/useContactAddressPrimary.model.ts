import { useContactAddressList } from "./useContactAddressList.model";

export const useContactAddressPrimary = () => {
  const { addressList } = useContactAddressList();
  return {
    addressPrimary: addressList.find((p) => p.type === "primary") ?? {
      type: "",
      value: "",
      map: "",
      videoId: "",
    },
  };
};
