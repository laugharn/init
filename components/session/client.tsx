'use client'

import { setSession } from '@/lib/util/client'
import { useEffect, useEffectEvent } from 'react'

export function SessionClient() {
  const eventSetSesion = useEffectEvent(() => {
    setSession()
  })

  useEffect(() => {
    eventSetSesion()
  }, [])

  return null
}
