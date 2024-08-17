/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      { protocol: "https", hostname: "i0.wp.com" },
    ],
  },
  experimental: {
    taint: true,
  },
  env: {
    SANITY_API_WRITE_TOKEN:
      "skLBJXAFEAm2FfqYfeVcT16pUiXhNCK1xlc5ijVC6FIyOrFlCvoecUvua3G0tFKtWKUWFjtokWXv7egFwnG7rSxkE5ZnO3BpSySPhYeZjCXzzVRaoeICaLtXYuWUGHMOIn6eqyDgJ7ExoQ5wtbqWogO15nar3ubWssX7z9GGlTeKRBKdm23o",
  },
  // ...other config settings
};

export default nextConfig;
