'use client'

import { setSession } from '@/lib/util/client'
import { useEffect } from 'react'

export function SessionClient() {
  useEffect(() => {
    setSession()
  }, [])

  return null
}
