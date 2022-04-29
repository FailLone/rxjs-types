import { repeat } from "../string/repeat";
import { end } from "./end";
import { leftGroup } from "./leftGroup";
import { oneFrame } from "./oneFrame";
import { rightGroup } from "./rightGroup";
import { toNumber } from "../string/toNumber";

export type frame<T extends string> =
    T extends `${infer A}${infer B}`
        ? B extends ''
            ? repeat<oneFrame, toNumber<T>>
            : T extends `${infer A}000`
                ? `-${A}s-`
                : `-${T}ms-`
        : never

export type symbols = leftGroup | rightGroup | end | oneFrame