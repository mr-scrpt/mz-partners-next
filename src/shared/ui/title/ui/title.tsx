import { FC, HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const Title: FC<TitleProps> = (props) => {
  const { text, className } = props;
  return <h1>{text}</h1>;
};
