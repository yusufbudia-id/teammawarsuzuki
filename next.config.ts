import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,

  // Tambahan redirect untuk mengatasi error 404 dari URL /home di Google Search Console
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // Redirect 301 (SEO Friendly)
      },
      {
        source: '/home/', // Menangkap URL jika ada garis miring di akhir
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;