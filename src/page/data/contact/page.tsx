import { BreadcrumbsModule } from "@/widget/breadcrumbs";
import { CallbackModule } from "@/widget/callback";
import { ContactModule } from "@/widget/contact";
import { FC } from "react";

interface PageContactProps {}
import sPage from "../../ui/page.module.scss";

export const PageContact: FC<PageContactProps> = async (props) => {
  return (
    <>
      <BreadcrumbsModule />
      <ContactModule />
      <CallbackModule />
    </>
  );
};
