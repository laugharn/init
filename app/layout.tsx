import '~/styles/app.css'
import type { Metadata } from 'next'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
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
