import { Metadata } from "next";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { headers } from "next/headers";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}
export type PageMetadataMap = Record<Locale, PageMetadata>;

interface GenerateMetadataFromPageOptions {
  pageMetadata: Record<Locale, PageMetadata>;
  locale: Locale;
  baseUrl?: string;
  canonicalPath?: string;
}
async function getBaseUrl(): Promise<string> {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";

  return `${protocol}://${host}`;
}

export async function generateMetadataFromPage({
  pageMetadata,
  locale,
  canonicalPath = "/",
}: GenerateMetadataFromPageOptions): Promise<Metadata> {
  const meta = pageMetadata[locale] || pageMetadata.ua;
  const baseUrl = await getBaseUrl();
  const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME;

  return {
    title: `${meta.title} | ${projectName}`,
    description: meta.description,
    keywords: meta.keywords,

    openGraph: {
      title: meta.ogTitle || meta.title,
      description: meta.ogDescription || meta.description,
      locale: getOpenGraphLocale(locale),
      type: "website",
      url: `${baseUrl}/${canonicalPath}`,
      images: meta.ogImage
        ? [
            {
              url: `${baseUrl}${meta.ogImage}`,
              width: 1200,
              height: 630,
              alt: meta.title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: meta.ogTitle || meta.title,
      description: meta.ogDescription || meta.description,
      images: meta.ogImage ? [`${baseUrl}${meta.ogImage}`] : undefined,
    },

    alternates: {
      canonical: `${baseUrl}${canonicalPath}`,
      // languages: {
      //   uk: `${baseUrl}/ua${canonicalPath}`,
      //   en: `${baseUrl}/en${canonicalPath}`,
      // },
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function getOpenGraphLocale(locale: Locale): string {
  const localeMap = {
    ua: "uk_UA",
    en: "en_US",
  };

  return localeMap[locale] || "uk_UA";
}
