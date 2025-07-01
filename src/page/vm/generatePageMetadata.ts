import { Locale } from "@/shared/lib/i18n/domain/type";
import { generateMetadataFromPage, PageMetadataMap } from "@/shared/lib/next";
import { headers } from "next/headers";

export const generatePageMetadata = async (
  params: Promise<{ locale: Locale }>,
  metadata: PageMetadataMap,
) => {
  const locale = (await params).locale;

  const headerList = await headers();
  const pathname = headerList.get("x-current-path");

  return generateMetadataFromPage({
    pageMetadata: metadata,
    locale,
    canonicalPath: pathname || "/",
  });
};
