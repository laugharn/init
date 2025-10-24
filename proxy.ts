import { type NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: [],
}

export async function proxy(_: NextRequest) {
  return NextResponse.next()
}
