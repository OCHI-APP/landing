import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Fix Turbopack incorrectly inferring the workspace root when other lockfiles
    // exist outside this project (e.g. /Users/rahim/package-lock.json).
    root: __dirname,
  },
};

export default nextConfig;
