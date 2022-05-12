/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')
const nextConfig = {
  reactStrictMode: true,
  ...withVideos()
}

module.exports = nextConfig

