import type { Connection, ShopifyErrorLike } from './types'
import { ensureStartsWith, isObject } from '../util'

const SHOPIFY_API_ENDPOINT = '/api/2023-01/graphql.json'

const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN
  ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, 'https://')
  : ''

export const SHOPIFY_ENDPOINT = `${SHOPIFY_DOMAIN}${SHOPIFY_API_ENDPOINT}`

function findError<T extends object>(error: T): boolean {
  if (Object.prototype.toString.call(error) === '[object Error]') {
    return true
  }

  const prototype = Object.getPrototypeOf(error) as T | null

  return prototype === null ? false : findError(prototype)
}

export function isShopifyError(error: unknown): error is ShopifyErrorLike {
  if (!isObject(error)) return false

  if (error instanceof Error) return true

  return findError(error)
}

export function removeEdgesAndNodes<T>(array: Connection<T>): T[] {
  return array.edges.map((edge) => edge?.node)
}
