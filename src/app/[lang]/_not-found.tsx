import { i18n } from "@/shared/lib/i18n";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <a
          href={`/${i18n.defaultLocale}`}
          className="text-blue-500 hover:text-blue-700"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
