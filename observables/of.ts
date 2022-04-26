import { fromArray } from './from';
import { stringLike } from "../string/stringLike";

export type of<
    T1 extends stringLike,
    T2 extends stringLike = '',
    T3 extends stringLike = '',
    T4 extends stringLike = '',
    T5 extends stringLike = '',
    T6 extends stringLike = '',
    T7 extends stringLike = '',
    T8 extends stringLike = '',
    T9 extends stringLike = '',
    T10 extends stringLike = '',
    T11 extends stringLike = '',
    T12 extends stringLike = ''
> = fromArray<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12]>
