import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "https://webcorseworkbakend.up.railway.app/:path*",
      },
    ];
  },
};

export default nextConfig;
