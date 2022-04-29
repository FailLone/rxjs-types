import { length } from './length';
import { compare as numCompare } from './../number/compare';
export type compare<A extends string, B extends string> =
    numCompare<length<A>, length<B>> extends true
        ? true
        : length<A> extends length<B>
            ? compareByStep<A, B>
            : false

type compareByStep<A extends string, B extends string> =
    A extends `${infer A1}${infer A2}`
        ? B extends `${infer B1}${infer B2}`
            ? numCompare<map[A1], map[B1]> extends true
                ? true
                : map[A1] extends map[B1]
                    ? compareByStep<A2, B2>
                    : false
            : true
        : true

type map = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    [property: string]: number
}