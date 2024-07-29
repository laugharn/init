import '~/styles/app.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

function Layout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'init',
}

export default Layout
