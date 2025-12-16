import type { NextConfig } from "next";
import { fileURLToPath } from "url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Fix Turbopack incorrectly inferring the workspace root when other lockfiles
    // exist outside this project (e.g. /Users/rahim/package-lock.json).
    root: projectRoot,
  },
};

export default nextConfig;
