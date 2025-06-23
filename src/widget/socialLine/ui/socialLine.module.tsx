import { FC, HTMLAttributes } from "react";
import { SocialLineLayout } from "./layout/socialLine.layout";
import { SocialList } from "./socialList/socialList";

// import { SocialList } from "@/shared/ui/socialList";

interface SocialLineModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const SocialLineModule: FC<SocialLineModuleProps> = (props) => {
  const { className } = props;
  return <SocialLineLayout SocialSlot={<SocialList />} className={className} />;
};
