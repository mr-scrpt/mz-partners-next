import { FC, SVGProps } from "react";
import { LOGO_VIEW, LogoView } from "../domain/type";
import { LogoSVG } from "./logoSVG";

interface LogoProps extends SVGProps<SVGSVGElement> {
  view: LogoView;
}

export const Logo: FC<LogoProps> = (props) => {
  const { view } = props;
  return <LogoSVG {...props} fill={LOGO_VIEW[view]} />;
};
