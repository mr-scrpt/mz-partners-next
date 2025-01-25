import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "export",
  distDir: "build",
  /* config options here */
  sassOptions: {
    prependData: `@use "./src/shared/style/_mixin.scss" as *;`,
  },
};

// export default nextConfig;

export default withNextIntl(nextConfig);
