import { FC, HTMLAttributes } from "react";
import { LayoutBenefit } from "./component/layout/layout.benefit";
import { HeaderBenefit } from "./component/header/header.benefit";
import { ListBenefitAnimatedCompose } from "./compose/listBenefitAnimated.compose";

interface BenefitModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const BenefitModule: FC<BenefitModuleProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <LayoutBenefit
      HeaderSlot={<HeaderBenefit />}
      ContentSlot={<ListBenefitAnimatedCompose />}
      className={className}
      {...rest}
    />
  );
};
