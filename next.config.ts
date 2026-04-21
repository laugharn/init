import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    cachedNavigations: true,
    inlineCss: true,
    optimisticRouting: true,
    partialFallbacks: true,
    turbopackFileSystemCacheForDev: true,
  },
  reactCompiler: true,
}

export default nextConfig
