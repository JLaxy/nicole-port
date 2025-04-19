import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // Set to true if this is a permanent redirect
      },
    ];
  },
};

export default nextConfig;
