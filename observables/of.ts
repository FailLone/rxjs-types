import { fromArray } from './from';
import { stringLike } from "../string/stringLike";

export type of<
    T1 extends unknown,
    T2 extends unknown,
    T3 extends unknown = unknown,
    T4 extends unknown = unknown,
    T5 extends unknown = unknown,
    T6 extends unknown = unknown,
    T7 extends unknown = unknown,
    T8 extends unknown = unknown,
    T9 extends unknown = unknown,
    T10 extends unknown = unknown,
    T11 extends unknown = unknown,
    T12 extends unknown = unknown
> = fromArray<
    removeunknown<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12]>
>

type removeunknown<T extends unknown[]> =
    T extends [infer Item, ...infer Rest]
            ? Item extends stringLike
                ? [Item, ...removeunknown<Rest>]
                : removeunknown<Rest>
            : []
