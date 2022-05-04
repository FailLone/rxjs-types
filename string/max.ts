import { compare } from "./compare";

export type max<T extends unknown[], Prev extends string = '0'> =
    T extends [infer Item, ...infer Rest]
        ? max<Rest extends string[] ? Rest : [], compare<Item & string, Prev> extends true ? Item & string : Prev>
        : Prev