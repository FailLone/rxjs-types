import { stringLike } from "../string/stringLike";

export type join<T extends stringLike[], Seperator extends string = ','> =
    T['length'] extends 0
        ? ''
        : T extends [infer Item, ...infer Rest]
            ? Item extends stringLike
                ? Rest extends stringLike[]
                    ? `${Item}${Rest['length'] extends 0 ? '' : Seperator}${join<Rest, Seperator>}`
                    : never
                : never
            : never