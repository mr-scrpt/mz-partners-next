import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    prependData: `@use "./src/shared/style/_mixin.scss" as *;`,
  },
};

export default nextConfig;
