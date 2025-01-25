export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  console.log("output_log: Page lang =>>>", lang);
  return (
    <div>
      <h1>{lang}</h1>
    </div>
  );
}
