export function setSession(
  { key, value }: { key: string; value: string } = { key: 'sessionId', value: new Date().toISOString() },
) {
  if (!sessionStorage.getItem(key)) {
    sessionStorage.setItem(key, value)
  }
}
