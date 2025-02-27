import '@/app/globals.css'
import { Analytics } from '@vercel/analytics/next'
import { Geist_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import SessionClient from '@/components/session/client'
import { SpeedInsights } from '@vercel/speed-insights/next'

const geistMono = Geist_Mono({
  display: 'swap',
  variable: '--font-mono',
  subsets: ['latin'],
})

function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US">
      <body className={`${geistMono.variable} bg-black font-mono text-white antialiased`}>
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
