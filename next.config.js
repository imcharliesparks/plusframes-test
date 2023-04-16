/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    });

    return config;
  },
  env: {
    START_API_KEY: process.env.START_API_KEY,
    START_API_ENDPOINT: process.env.START_API_ENDPOINT,
    POLL_INTERVAL: process.env.POLL_INTERVAL
  }
}

module.exports = nextConfig
