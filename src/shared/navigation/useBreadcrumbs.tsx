"use client";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useNavigationData } from "../navigation/navigation.provider";
import { NAVIGATION_LIST } from "../navigation/type";

export const useBreadcrumb = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const pageList = useNavigationData(NAVIGATION_LIST.pageList);

  const pathsList = pathname.split("/").filter((p) => p !== locale);

  const breadcrumbList = pathsList.map((path) => {
    const page = pageList.find((p) => p.route === `/${path}`);

    return {
      title: page?.title || path,
      route: `/${path}`,
      isActive: path === pathsList[pathsList.length - 1],
    };
  });

  return { breadcrumbList };
};
