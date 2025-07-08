import { useContactAddressPrimary } from "@/entity/contact";
import { GoogleMapEmbed } from "@/shared/ui/map/googleMapEmbed";
import { FC, HTMLAttributes } from "react";

interface MapContactProps extends HTMLAttributes<HTMLDivElement> {}

export const MapContact: FC<MapContactProps> = (props) => {
  const { addressPrimary } = useContactAddressPrimary();
  return <GoogleMapEmbed mapLink={addressPrimary.map} />;
};
