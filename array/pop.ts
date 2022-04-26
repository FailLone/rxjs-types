export type pop<T extends unknown[]> = T extends [...infer Rest, infer Last]
    ? Rest
    : never