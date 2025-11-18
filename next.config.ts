import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    'http://192.168.15.2:3000', // ajuste a porta se necessário
  ],
};

export default nextConfig;
