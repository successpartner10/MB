/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    // Browser only ever talks to /api relative paths; the dev server proxies
    // to the Express backend. (No localhost leaks into the client.)
    return [
      { source: "/api/:path*", destination: "http://127.0.0.1:4000/api/:path*" },
    ];
  },
};

export default nextConfig;
