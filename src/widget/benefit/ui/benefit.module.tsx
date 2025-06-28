import { FC, HTMLAttributes } from "react";
import { BenefitLayout } from "./layout/benefit.layout";
import { BenefitHeader } from "./header/benefit.header";
import { List } from "./list/list";

interface BenefitModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const BenefitModule: FC<BenefitModuleProps> = (props) => {
  const { className } = props;
  return (
    <BenefitLayout
      HeaderSlot={<BenefitHeader />}
      ContentSlot={<List />}
      className={className}
    />
  );
};
