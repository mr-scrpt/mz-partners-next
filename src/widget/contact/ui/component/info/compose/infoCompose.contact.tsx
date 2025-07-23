import { FC, HTMLAttributes } from "react";
import { AddressListAnimated } from "../../addressList";
import { PhoneListAnimated } from "../../phoneList";
import { InfoContactAnimated } from "..";

interface InfoComposeContactProps extends HTMLAttributes<HTMLDivElement> {}

export const InfoContactComposeAnimated: FC<InfoComposeContactProps> = (
  props,
) => {
  const { className } = props;
  return (
    <InfoContactAnimated
      AddressComponent={AddressListAnimated}
      PhoneComponent={PhoneListAnimated}
      AdditionalComponent={AddressListAnimated}
      className={className}
    />
  );
};
