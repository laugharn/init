import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
    ppr: true,
    reactCompiler: true,
  },
}

export default nextConfig
