import clsx from "clsx";
import { FC } from "react";

import sDeco from "./deco.module.scss";
import sInfoContact from "./info.contact.module.scss";
import { InfoContactProps } from "./type";

export const InfoContact: FC<InfoContactProps> = (props) => {
  const { className, AddressComponent, PhoneComponent, AdditionalComponent } =
    props;

  return (
    <div className={clsx(sInfoContact.root, className)}>
      <div className={sInfoContact.inner}>
        <div
          className={clsx(sInfoContact.list, [
            sDeco.deco,
            sDeco.deco_separator,
          ])}
        >
          <AddressComponent className={sInfoContact.item} />
          <PhoneComponent className={sInfoContact.item} />
          <AdditionalComponent className={sInfoContact.item} />
        </div>
      </div>
    </div>
  );
};
