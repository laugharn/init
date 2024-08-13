import { type NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: [],
}

export async function middleware(req: NextRequest) {
  return NextResponse.next()
}
