import { Breadcrumbs } from "@/shared/ui/breadcrumbs/ui/breadcrumbs";
import { FC, HTMLAttributes } from "react";
import { BreadcrumbsLayout } from "./layout/breadcrumbs.layout";

interface BreadcrumbsModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const BreadcrumbsModule: FC<BreadcrumbsModuleProps> = (props) => {
  const { className } = props;
  return (
    <BreadcrumbsLayout ContentSlot={<Breadcrumbs />} className={className} />
  );
};
