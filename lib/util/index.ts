export function chunk(arr: any[], size: number) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_: any, i: number) =>
    arr.slice(i * size, i * size + size),
  )
}

export function ensureStartsWith(stringToCheck: string, startsWith: string) {
  return stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`
}

export function intersection(a: any[], b: any[]) {
  return a.filter((x) => b.includes(x))
}

export function isObject(object: unknown): object is Record<string, unknown> {
  return typeof object === 'object' && object !== null && !Array.isArray(object)
}

export function last(arr: any[]) {
  return arr[arr.length - 1]
}
