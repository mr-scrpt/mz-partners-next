import { FC, HTMLAttributes } from "react";
import { HeaderContact } from "./component/header/header.contact";
import { InfoComposeContact } from "./component/info/compose/infoCompose.contact";
import { LayoutContact } from "./component/layout/layout.contact";
import { MapContact } from "./component/map/map.contact";
import { PromoComposeContact } from "./component/promo/compose/promoCompose.contact";
import { VideoComposeContact } from "./component/video/compose/videoCompose.contact";

interface ContactModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactModule: FC<ContactModuleProps> = (props) => {
  const { className } = props;
  return (
    <LayoutContact
      HeaderSlot={<HeaderContact />}
      PrimarySlot={<InfoComposeContact />}
      SecondarySlot={<PromoComposeContact />}
      TertiarySlot={<MapContact />}
      FourthSlot={<VideoComposeContact />}
      className={className}
    />
  );
};
