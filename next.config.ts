import type { NextConfig } from "next";
import { fileURLToPath } from "url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Fix Turbopack incorrectly inferring the workspace root when other lockfiles
    // exist outside this project (e.g. /Users/rahim/package-lock.json).
    root: projectRoot,
  },
  output: "standalone",
  async headers() {
    return [
      // Public assets under /public/images/* can get stuck in aggressive browser/CDN caches
      // if you overwrite files without changing filenames. Force revalidation.
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
      {
        source: "/bg.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
