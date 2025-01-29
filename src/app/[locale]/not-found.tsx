import { NotFoundModule } from "@/widget/notFound/ui/notFound.module";
import { FC, HTMLAttributes } from "react";

interface NotFoundProps extends HTMLAttributes<HTMLDivElement> {}

const NotFound: FC<NotFoundProps> = (props) => {
  return <NotFoundModule />;
};

export default NotFound;
