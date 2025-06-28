import { NotFound } from "@/shared/ui/notFound/ui/notFound";
import { FC, HTMLAttributes } from "react";

interface NotFoundModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const NotFoundModule: FC<NotFoundModuleProps> = (props) => {
  const { className } = props;
  return (
    <NotFound title={"text"} text={"text"} {...props} className={className} />
  );
};
