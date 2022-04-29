import { repeat } from "../string/repeat";
import { oneFrame } from "./oneFrame";
import { toNumber } from "../string/toNumber";

export type frame<T extends string> =
    T extends `${infer A}${infer B}`
        ? B extends ''
            ? repeat<oneFrame, toNumber<T>>
            : T extends `${infer A}000`
                ? `-${A}s-`
                : `-${T}ms-`
        : never