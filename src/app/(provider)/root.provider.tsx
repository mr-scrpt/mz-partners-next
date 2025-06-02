import { ComposeChildren } from "@/shared/lib/react.server";
import { FC, HTMLAttributes } from "react";
import { LangProvider } from "./lang.provider";
import { ModalProvider } from "./modal.provider";
import { NavigationProvider } from "./navigation.provider";

interface ProvidersRootProps extends HTMLAttributes<HTMLDivElement> {}

export const ProvidersRoot: FC<ProvidersRootProps> = async (props) => {
  const { children } = await props;
  return (
    <ComposeChildren>
      <LangProvider />
      <ModalProvider />
      <NavigationProvider />
      <>{children}</>
    </ComposeChildren>
  );
};
