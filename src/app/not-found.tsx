// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

import { i18n } from "@/shared/lib/i18n";
import BaseLayout from "@/shared/ui/layout/ui/base.layout";
import NotFoundPage from "@/shared/ui/notFound/ui/notFound";

export default function GlobalNotFound() {
  return (
    <BaseLayout lang={i18n.defaultLocale}>
      <NotFoundPage />
    </BaseLayout>
  );
}
