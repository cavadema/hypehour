import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/lovable",
        destination: "/ferramentas/lovable",
        permanent: true,
      },
    ];
  },
  allowedDevOrigins: [
    "http://192.168.15.2:3000", // ajuste a porta se necessário
  ],
};

export default nextConfig;
