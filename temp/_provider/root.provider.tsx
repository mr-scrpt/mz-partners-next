"use server";

import { ComposeChildren } from "@/shared/lib/react";
import { FC, HTMLAttributes } from "react";
// import { LangProvider } from "./lang.provider";

interface ProvidersRootProps extends HTMLAttributes<HTMLDivElement> {}

export const ProvidersRoot: FC<ProvidersRootProps> = async (props) => {
  const { children } = await props;
  return <ComposeChildren>{children}</ComposeChildren>;
};
{
  /* <LangProvider /> */
}
