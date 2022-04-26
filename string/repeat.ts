import { maxNestCount } from '../common/maxNestCount';
import { add } from '../number/add';
import { isEqual } from './../number/isEqual';

export type repeat<
    S extends string,
    T extends number,
    O extends string = S,
    N extends number = 1
> = T extends 0
 ? ''
 : N extends maxNestCount
    ? O
    : isEqual<T, N> extends true
        ? S
        : `${O}${repeat<
                S,
                T,
                O,
                add<N, 1>
            >}`
