import { useContactAddressPrimary } from "@/entity/contact";
import { GoogleMapEmbed } from "@/shared/ui/map/googleMapEmbed";
import { FC, HTMLAttributes } from "react";

interface MapProps extends HTMLAttributes<HTMLDivElement> {}

export const Map: FC<MapProps> = (props) => {
  const { addressPrimary } = useContactAddressPrimary();
  return <GoogleMapEmbed mapLink={addressPrimary.map} />;
};
