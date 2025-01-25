import createNextIntlPlugin from "next-intl/plugin";

export const withNextIntl = createNextIntlPlugin(
  "./src/shared/lib/i18n/request.ts",
);
