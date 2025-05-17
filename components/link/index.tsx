import type { ComponentProps } from 'react'
import NextLink from 'next/link'

type LinkProps = ComponentProps<typeof NextLink>

/**
 * Link component that wraps Next.js Link component.
 */
const Link = (props: LinkProps) => {
  return <NextLink {...props} />
}

export default Link
