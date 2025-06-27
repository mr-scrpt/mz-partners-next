import { Breadcrumbs } from "@/shared/ui/breadcrumbs/ui/breadcrumbs";
import { CallbackModule } from "@/widget/callback";
import { ContactModule } from "@/widget/contact";
import { FC } from "react";

interface PageContactProps {}

export const PageContact: FC<PageContactProps> = async (props) => {
  return (
    <>
      <Breadcrumbs />
      <ContactModule />
      <CallbackModule />
    </>
  );
};
