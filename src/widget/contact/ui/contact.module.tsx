import { FC, HTMLAttributes } from "react";

import { ContactLayout } from "./layout/contact.layout";
import { ContactHeader } from "./header/contact.header";
import { Info } from "./info/info";
import { Map } from "./map/map";
import { Promo } from "./promo/promo";
import { Video } from "./video/video";

interface ContactModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactModule: FC<ContactModuleProps> = (props) => {
  const { className } = props;
  return (
    <ContactLayout
      HeaderSlot={<ContactHeader />}
      PrimarySlot={<Info />}
      SecondarySlot={<Promo />}
      TertiarySlot={<Map />}
      FourthSlot={<Video />}
      className={className}
    />
  );
};
