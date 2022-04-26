export type or<A extends boolean, B extends boolean> =
    A extends true
    ? true
    : B extends true
        ? true
        : false