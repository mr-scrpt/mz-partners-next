import { withNextIntl } from "@/app/(plugin)/i18n/hoc";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `
        @use "./src/shared/style/classic/_mixin.scss" as *;
        @use "./src/shared/style/classic/_keyframe.scss" as *;
    `,
  },
};

export default withNextIntl(nextConfig);
