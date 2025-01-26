import PageLayout from "./ui/layout/ui/page.layout";

export default function NotFoundPage() {
  return (
    <PageLayout title={t("title")}>
      <p className="max-w-[460px]">NOT FOUND CUSTOM</p>
    </PageLayout>
  );
}
