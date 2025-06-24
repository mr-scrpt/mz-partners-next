import { FC, HTMLAttributes } from "react";

import { ContactLayout } from "./layout/contact.layout";
import { ContactHeader } from "./header/contact.header";
import { Info } from "./info/info";
import { Map } from "./map/map";

interface ContactModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactModule: FC<ContactModuleProps> = (props) => {
  return (
    <ContactLayout
      HeaderSlot={<ContactHeader />}
      PrimarySlot={<Info />}
      SecondarySlot={<Map />}
    />
  );
};
