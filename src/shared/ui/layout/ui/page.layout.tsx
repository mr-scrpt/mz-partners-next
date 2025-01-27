import { HeaderModule } from "@/widget/header";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function LayoutPage({ children }: Props) {
  // const t = useTranslations("PageLayout");

  return (
    <>
      <HeaderModule />
      {children}
    </>
  );
}
