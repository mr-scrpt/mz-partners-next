import { FC, HTMLAttributes } from "react";
import { ContactLayout } from "./layout/contact.layout";
import { ContactHeader } from "./header/contact.header";
import { List } from "./list/list";

interface ContactModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactModule: FC<ContactModuleProps> = (props) => {
  return (
    <ContactLayout HeaderSlot={<ContactHeader />} ContentSlot={<List />} />
  );
};
