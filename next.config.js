/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["styles"],
    prependData: `@import "variables.scss";`,
  }
}

module.exports = nextConfig
