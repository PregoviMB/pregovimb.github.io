import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname, // __dirname fait généralement référence au dossier où se trouve next.config.mjs
  },
};

export default nextConfig;    