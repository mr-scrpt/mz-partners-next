import { FC, HTMLAttributes } from "react";
import { AdditionalListContact } from "../component/additionalList/additionalList.contact";
import { useAdditionalListContact } from "../../vm/useAdditionalList.contact";
import { AdditionalItemContact } from "../component/additionalList/item/additionalItem.contact";

interface AdditionalListContactComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const AdditionalListContactCompose: FC<
  AdditionalListContactComposeProps
> = (props) => {
  return (
    <AdditionalListContact
      getDataList={useAdditionalListContact}
      ItemComponent={AdditionalItemContact}
      {...props}
    />
  );
};
