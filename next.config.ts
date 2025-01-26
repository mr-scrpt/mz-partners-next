import { withNextIntl } from "@/shared/lib/i18n/hoc";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "build",
  /* config options here */
  sassOptions: {
    prependData: `@use "./src/shared/style/_mixin.scss" as *;`,
  },
};

export default withNextIntl(nextConfig);
