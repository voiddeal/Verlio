import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: [path.resolve(__dirname, "app/test")],
    })
    return config
  },
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
}

export default nextConfig
