import { HeaderModule } from "@/widget/header";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function LayoutPage({ children }: Props) {
  return (
    <>
      <HeaderModule />
      {children}
    </>
  );
}
