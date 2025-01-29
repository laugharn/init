'use client'

import { setSession } from '@/lib/util/client'
import { useEffect } from 'react'

export default function SessionClient() {
  useEffect(() => {
    setSession()
  }, [])

  return null
}
