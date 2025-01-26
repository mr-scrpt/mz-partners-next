import { ComposeChildren } from "@/shared/lib/react.server";
import { FC, HTMLAttributes } from "react";

interface ProvidersRootProps extends HTMLAttributes<HTMLDivElement> {}

export const ProvidersRoot: FC<ProvidersRootProps> = async (props) => {
  const { children } = await props;
  return (
    <ComposeChildren>
      <>{children}</>
    </ComposeChildren>
  );
};
