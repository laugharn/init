import '@/styles/app.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import SessionClient from '@/components/session/client'
import { SpeedInsights } from '@vercel/speed-insights/next'

function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US">
      <body>
        {children}
        <Analytics />
        <SessionClient />
        <SpeedInsights />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'init',
}

export default Layout
