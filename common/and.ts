export type and<A extends boolean, B extends boolean> =
    A extends false
    ? false
    : B extends false
        ? false
        : true