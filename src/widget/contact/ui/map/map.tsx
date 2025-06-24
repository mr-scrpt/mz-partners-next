import { useContactAddressPrimary } from "@/entity/contact";
import { GoogleMapEmbede } from "@/shared/ui/map/googleMapEmbede";
import { FC, HTMLAttributes } from "react";

interface MapProps extends HTMLAttributes<HTMLDivElement> {}

export const Map: FC<MapProps> = (props) => {
  const { addressPrimary } = useContactAddressPrimary();
  return <GoogleMapEmbede mapLink={addressPrimary.map} />;
};
