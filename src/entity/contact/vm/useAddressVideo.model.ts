import { useContactAddressPrimary } from "./useContactAddressPrimary.model";

export const useAddressVideo = () => {
  const { addressPrimary } = useContactAddressPrimary();
  return {
    videoId: addressPrimary.videoId,
  };
};
