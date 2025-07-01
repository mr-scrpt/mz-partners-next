import { Locale } from "@/shared/lib/i18n/domain/type";
import { PageMetadataMap } from "@/shared/lib/next";

export interface PageParams {
  params: PageLocaleType;
}

export type PageLocaleType = Promise<{ locale: Locale }>;

export interface PageMetadataProps {
  params: PageLocaleType;
  metadata: PageMetadataMap;
}
