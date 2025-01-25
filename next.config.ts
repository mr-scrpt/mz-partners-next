import { withNextIntl } from "@/shared/lib/i18n/hoc";
// import { withNextIntl } from "@/shared/lib/i18n/request";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  // distDir: "build",
  /* config options here */
  sassOptions: {
    prependData: `@use "./src/shared/style/_mixin.scss" as *;`,
  },
};

// export default nextConfig;

export default withNextIntl(nextConfig);
