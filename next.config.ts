import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    cacheComponents: true,
    inlineCss: true,
    reactCompiler: true,
  },
}

export default nextConfig
