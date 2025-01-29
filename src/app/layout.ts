import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LayoutRoot({ children }: Props) {
  return children;
}
