import { isEqual } from './../number/isEqual';
import { compare } from "../number/compare";
import { length } from "./length";
import { add } from '../number/add';

export type padStart<S extends string, N extends number = 0, F extends string = '', Seed extends number = length<S>> =
    compare<N, length<S>> extends true
        ? isEqual<N, Seed> extends true
            ? S
            : padStart<`${F}${S}`, N, F, add<Seed, length<F>>>
        : S
