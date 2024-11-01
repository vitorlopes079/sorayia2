/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = withVideos({
  images: {
    domains: ["picsum.photos", "source.unsplash.com"],
  },
});

module.exports = nextConfig;
