import { Locale } from "@/shared/lib/i18n/domain/type";
import { PageMetadataMap } from "@/shared/lib/next";

export interface PageParams {
  locale: Locale;
}

// Расширенные типы для вашей кастомной логики
export type TParams = Record<string, string>;

export interface PageMetadataProps {
  params: Promise<PageParams>;
  metadata: PageMetadataMap;
}

export type NextjsSearchParams = {
  [key: string]: string | string[] | undefined;
};

export type CreatePageParams<
  T extends TParams = {},
  TSearchParams extends Record<string, any> = NextjsSearchParams,
> = {
  params: Promise<PageParams & T>;
  searchParams?: Promise<TSearchParams>;
};
