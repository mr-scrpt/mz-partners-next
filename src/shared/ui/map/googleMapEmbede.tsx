import { FC, HTMLAttributes } from "react";

import sGoogleMapEmbede from "./googleMapEmbede.module.scss";

interface GoogleMapEmbedeProps extends HTMLAttributes<HTMLDivElement> {
  mapLink: string;
}

export const GoogleMapEmbede: FC<GoogleMapEmbedeProps> = (props) => {
  const { mapLink } = props;

  return (
    <div className={sGoogleMapEmbede.root}>
      <div className={sGoogleMapEmbede.inner}>
        <div className={sGoogleMapEmbede.mapBox}>
          <iframe
            src={mapLink}
            referrerPolicy="no-referrer-when-downgrade"
            className={sGoogleMapEmbede.map}
          />
        </div>
      </div>
    </div>
  );
};
