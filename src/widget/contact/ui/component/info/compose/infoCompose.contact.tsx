import { FC, HTMLAttributes } from "react";
import { InfoContact } from "../info.contact";
import { AdditionalListComposeContact } from "../../additionalList/compose/additionalListCompose.contact";
import { AddressListComposeContact } from "../../addressList/compose/addressListCompose.contact";
import { PhoneListComposeContact } from "../../phoneList/compose/phoneListCompose.contact";

interface InfoComposeContactProps extends HTMLAttributes<HTMLDivElement> {}

export const InfoComposeContact: FC<InfoComposeContactProps> = (props) => {
  const { className } = props;
  return (
    <InfoContact
      AddressComponent={AddressListComposeContact}
      PhoneComponent={PhoneListComposeContact}
      AdditionalComponent={AdditionalListComposeContact}
      className={className}
    />
  );
};
