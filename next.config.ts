import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    reactCompiler: true,
    useCache: true,
  },
}

export default nextConfig
