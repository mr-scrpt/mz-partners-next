import { FC, HTMLAttributes } from "react";

import { ContactFooter } from "./contact/contact.footer";
import { HeroFooter } from "./hero/hero.footer";
import { FooterLayout } from "./layout/footer.layout";
import { MenuFooter } from "./menu/menu.footer";

interface FooterModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const FooterModule: FC<FooterModuleProps> = (props) => {
  const { className } = props;
  return (
    <FooterLayout
      PrimarySlot={<HeroFooter />}
      SecondarySlot={<MenuFooter />}
      ThirdSlot={<ContactFooter />}
      className={className}
    />
  );
};
