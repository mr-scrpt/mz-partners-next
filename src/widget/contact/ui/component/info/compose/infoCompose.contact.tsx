import { FC, HTMLAttributes } from "react";
import { InfoContact } from "../info.contact";
import { AddressListAnimated } from "../../addressList";
import { PhoneListAnimated } from "../../phoneList";

interface InfoComposeContactProps extends HTMLAttributes<HTMLDivElement> {}

export const InfoComposeContact: FC<InfoComposeContactProps> = (props) => {
  const { className } = props;
  return (
    <InfoContact
      AddressComponent={AddressListAnimated}
      PhoneComponent={PhoneListAnimated}
      AdditionalComponent={AddressListAnimated}
      className={className}
    />
  );
};
