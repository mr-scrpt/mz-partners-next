import { FC, HTMLAttributes } from "react";

import sGoogleMapEmbede from "./googleMapEmbede.module.scss";

interface GoogleMapEmbedeProps extends HTMLAttributes<HTMLDivElement> {}

export const GoogleMapEmbede: FC<GoogleMapEmbedeProps> = (props) => {
  return (
    <div className={sGoogleMapEmbede.root} {...props}>
      <div className={sGoogleMapEmbede.inner}>
        <div className={sGoogleMapEmbede.mapBox}>
          <iframe
            src="
            https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10075.905390413101!2d36.289730340216146!3d49.97232652532723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41270a6936b7c2e1%3A0xc27bae9a1e7b0efd!2sIBC%20Capital!5e0!3m2!1sru!2sua!4v1750678277220!5m2!1sru!2sua"
            referrerPolicy="no-referrer-when-downgrade"
            className={sGoogleMapEmbede.map}
          />
        </div>
      </div>
    </div>
  );
};
