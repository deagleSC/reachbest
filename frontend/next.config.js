/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
    images: {
        domains: ['upload.wikimedia.org', 'm.media-amazon.com'],
      },
}

module.exports = nextConfig
