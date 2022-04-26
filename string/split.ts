import { push } from "../array/push";

export type split<S extends string, Seperator extends string, Res extends string[] = []> =
    S extends `${infer Char}${Seperator}${infer Rest}`
    ? split<Rest, Seperator, push<Res, Char>>
    : S extends ''
        ? Res
        : push<Res, S>
