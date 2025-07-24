import { FC, HTMLAttributes } from "react";
import { AddressListAnimated } from "../../addressList";
import { PhoneListAnimated } from "../../phoneList";
import { InfoContactAnimated } from "..";
import { AdditionalListAnimated } from "../../additionalList";

interface InfoComposeContactProps extends HTMLAttributes<HTMLDivElement> {}

export const InfoContactComposeAnimated: FC<InfoComposeContactProps> = (
  props,
) => {
  const { className } = props;
  return (
    <InfoContactAnimated
      AddressComponent={AddressListAnimated}
      PhoneComponent={PhoneListAnimated}
      AdditionalComponent={AdditionalListAnimated}
      className={className}
    />
  );
};
