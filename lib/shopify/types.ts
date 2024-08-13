export type Connection<T> = {
  edges: Array<Edge<T>>
}

export type Edge<T> = {
  node: T
}

export type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never

export interface ShopifyErrorLike {
  status: number
  message: Error
  cause?: Error
}
