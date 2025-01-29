import { routing } from "@/shared/lib/i18n/routing";
import LayoutHTML from "@/shared/ui/layout";
import { NotFoundModule } from "@/widget/notFound/ui/notFound.module";

const NotFoundGlobalPage = async () => {
  return (
    <LayoutHTML locale={routing.defaultLocale}>
      <NotFoundModule />
    </LayoutHTML>
  );
};

export default NotFoundGlobalPage;
