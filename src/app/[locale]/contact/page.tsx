import { FC, HTMLAttributes } from "react";

interface PageProps extends HTMLAttributes<HTMLDivElement> {}

const Page: FC<PageProps> = (props) => {
  return <div>Page CONTACT</div>;
};

export default Page;
