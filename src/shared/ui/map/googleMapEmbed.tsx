import { FC, HTMLAttributes } from "react";

import sGoogleMapEmbed from "./googleMapEmbed.module.scss";

interface GoogleMapEmbedProps extends HTMLAttributes<HTMLDivElement> {
  mapLink: string;
}

export const GoogleMapEmbed: FC<GoogleMapEmbedProps> = (props) => {
  const { mapLink } = props;

  return (
    <div className={sGoogleMapEmbed.root}>
      <div className={sGoogleMapEmbed.inner}>
        <div className={sGoogleMapEmbed.mapBox}>
          <iframe
            src={mapLink}
            referrerPolicy="no-referrer-when-downgrade"
            className={sGoogleMapEmbed.map}
          />
        </div>
      </div>
    </div>
  );
};
