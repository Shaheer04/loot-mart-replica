import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.lootmart.com.pk',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dpgultbqxxdttrjcatco.supabase.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
