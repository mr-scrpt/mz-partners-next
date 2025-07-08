import { HTMLAttributes, ComponentType } from "react";

interface AddressComponentContact extends HTMLAttributes<HTMLDivElement> {}

interface PhoneComponentContact extends HTMLAttributes<HTMLDivElement> {}

interface AdditionalComponentContact extends HTMLAttributes<HTMLDivElement> {}

export interface InfoContactProps extends HTMLAttributes<HTMLDivElement> {
  AddressComponent: ComponentType<AddressComponentContact>;
  PhoneComponent: ComponentType<PhoneComponentContact>;
  AdditionalComponent: ComponentType<AdditionalComponentContact>;
}
