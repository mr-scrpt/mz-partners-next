"use server";
import { generateMetadataFromPage } from "@/shared/lib/next";
import { headers } from "next/headers";
import { PageMetadataProps, TParams } from "../domain/page.type";

export const generatePageMetadata = async (props: PageMetadataProps) => {
  const { params, metadata } = props;

  const locale = (await params).locale;

  const headerList = await headers();
  const pathname = headerList.get("x-current-path");

  return generateMetadataFromPage({
    pageMetadata: metadata,
    locale,
    canonicalPath: pathname || "/",
  });
};
