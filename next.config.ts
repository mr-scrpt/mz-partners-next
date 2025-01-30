import { withNextIntl } from "@/shared/lib/i18n/hoc";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `@use "./src/shared/style/classic/_mixin.scss" as *;`,
  },
};

export default withNextIntl(nextConfig);
