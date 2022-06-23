/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "thumbor.prod.vidiocdn.com",
      "cdn29.us1.fansshare.com",
      "cloudinary.fifa.com",
    ],
  },
};

module.exports = nextConfig;
