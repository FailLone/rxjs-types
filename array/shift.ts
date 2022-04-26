export type shift<T extends unknown[]> = T extends [infer First, ...infer Rest]
    ? Rest
    : never