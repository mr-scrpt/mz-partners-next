import { FC, HTMLAttributes } from "react";
import { AdditionalListContact } from "../additionalList.contact";
import { AdditionalItemContact } from "../item/additionalItem.contact";
import { useAdditionalListContact } from "@/widget/contact/vm/useAdditionalList.contact";

interface AdditionalListComposeContactProps
  extends HTMLAttributes<HTMLDivElement> {}

export const AdditionalListComposeContact: FC<
  AdditionalListComposeContactProps
> = (props) => {
  const { className } = props;
  return (
    <AdditionalListContact
      ItemComponent={AdditionalItemContact}
      getDataList={useAdditionalListContact}
      className={className}
    />
  );
};
