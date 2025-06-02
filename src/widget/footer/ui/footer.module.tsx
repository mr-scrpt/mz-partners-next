import { MenuFooter } from "@/shared/ui/navigation";
import { PhoneListModule } from "@/shared/ui/phone";
import { FC, HTMLAttributes } from "react";
import { Action } from "./action/action";
import { FooterLayout } from "./layout/footer.layout";
import { Primary } from "./primary/primary";

interface FooterModuleProps extends HTMLAttributes<HTMLDivElement> { }

export const FooterModule: FC<FooterModuleProps> = (props) => {
  return (
    <FooterLayout
      PrimarySlot={<Primary />}
      SecondarySlot={<PhoneListModule />}
      ThirdSlot={<Action />}
    />
  );
};
