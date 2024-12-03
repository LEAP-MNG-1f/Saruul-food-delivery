import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BACKEND_POINT: process.env.NEXT_PUBLIC_BACKEND_POINT || "",
  },
};

export default nextConfig;
