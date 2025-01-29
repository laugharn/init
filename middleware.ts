import { type NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: [],
}

export async function middleware(_: NextRequest) {
  return NextResponse.next()
}
