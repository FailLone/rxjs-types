import { join } from './../array/join';
import { split } from './../string/split';
import { reverse } from "../array/reverse";
import { length } from "../string/length";
import { padStart } from "../string/paddStart";
import { isEqual } from './isEqual';
import { push } from '../array/push';
import { add } from './add';
import { stringLike } from '../string/stringLike';

export type Numbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type NumericCharacters =
  | `${Exclude<Numbers, 0>}${number}`
  | `${Numbers}`

type AddMap = [
[
    ["0", "0"], // 00
    ["1", "0"], // 01
    ["2", "0"], // 02
    ["3", "0"], // 03
    ["4", "0"], // 04
    ["5", "0"], // 05
    ["6", "0"], // 06
    ["7", "0"], // 07
    ["8", "0"], // 08
    ["9", "0"] // 09
],
[
    ["1", "0"], // 10
    ["2", "0"], // 11
    ["3", "0"], // 12
    ["4", "0"], // 13
    ["5", "0"], // 14
    ["6", "0"], // 15
    ["7", "0"], // 16
    ["8", "0"], // 17
    ["9", "0"], // 18
    ["0", "1"] // 19
],
[
    ["2", "0"], // 20
    ["3", "0"], // 21
    ["4", "0"], // 22
    ["5", "0"], // 23
    ["6", "0"], // 24
    ["7", "0"], // 25
    ["8", "0"], // 26
    ["9", "0"], // 27
    ["0", "1"], // 28
    ["1", "1"] // 29
],
[
    ["3", "0"], // 30
    ["4", "0"], // 31
    ["5", "0"], // 32
    ["6", "0"], // 33
    ["7", "0"], // 34
    ["8", "0"], // 35
    ["9", "0"], // 36
    ["0", "1"], // 37
    ["1", "1"], // 38
    ["2", "1"] // 39
],
[
    ["4", "0"], // 40
    ["5", "0"], // 41
    ["6", "0"], // 42
    ["7", "0"], // 43
    ["8", "0"], // 44
    ["9", "0"], // 45
    ["0", "1"], // 46
    ["1", "1"], // 47
    ["2", "1"], // 48
    ["3", "1"] // 49
],
[
    ["5", "0"], // 50
    ["6", "0"], // 51
    ["7", "0"], // 52
    ["8", "0"], // 53
    ["9", "0"], // 54
    ["0", "1"], // 55
    ["1", "1"], // 56
    ["2", "1"], // 57
    ["3", "1"], // 58
    ["4", "1"] // 59
],
[
    ["6", "0"], // 60
    ["7", "0"], // 61
    ["8", "0"], // 62
    ["9", "0"], // 63
    ["0", "1"], // 64
    ["1", "1"], // 65
    ["2", "1"], // 66
    ["3", "1"], // 67
    ["4", "1"], // 68
    ["5", "1"] // 69
],
[
    ["7", "0"], // 70
    ["8", "0"], // 71
    ["9", "0"], // 72
    ["0", "1"], // 73
    ["1", "1"], // 74
    ["2", "1"], // 75
    ["3", "1"], // 76
    ["4", "1"], // 77
    ["5", "1"], // 78
    ["6", "1"] // 79
],
[
    ["8", "0"], // 80
    ["9", "0"], // 81
    ["0", "1"], // 82
    ["1", "1"], // 83
    ["2", "1"], // 84
    ["3", "1"], // 85
    ["4", "1"], // 86
    ["5", "1"], // 87
    ["6", "1"], // 88
    ["7", "1"] // 89
],
[
    ["9", "0"], // 90
    ["0", "1"], // 91
    ["1", "1"], // 92
    ["2", "1"], // 93
    ["3", "1"], // 94
    ["4", "1"], // 95
    ["5", "1"], // 96
    ["6", "1"], // 97
    ["7", "1"], // 98
    ["8", "1"] // 99
]
]

export type bigAdd<
    S1 extends string,
    S2 extends string,
    Res = addByStep<reverseAll<fillZero<S1 extends NumericCharacters ? S1 : never, S2 extends NumericCharacters ? S2 : never>>>
> = Res extends stringLike[] ? join<reverse<Res>, ''> : never

export type fillZero<
    S1 extends NumericCharacters,
    S2 extends NumericCharacters,
    Res = [padStart<S1, length<S2>, '0'>, padStart<S2, length<S1>, '0'>]
> = Res extends [`${number}`, `${number}`] ? Res : never

export type reverseAll<
    T extends [`${number}`, `${number}`],
    Res = [reverse<split<T[0]>>, reverse<split<T[1]>>]
> = Res extends [`${Numbers}`[], `${Numbers}`[]] ? Res : never

type addByStep<
    T extends [`${Numbers}`[], `${Numbers}`[]],
    Res extends `${number}`[] = [],
    Seed extends number = 0,
    Prev extends `${Numbers}` =`${0}`,
    Cur extends AddMap[Numbers][Numbers] = AddMap[T[0][Seed]][T[1][Seed]],
    CurPrev extends AddMap[Numbers][Numbers] = AddMap[Prev][Cur[0]],
> =
    isEqual<Seed, T[0]['length']> extends true
        ? Prev extends '0' ? Res : [...Res, Prev]
        : CurPrev[1] extends '1'
            ? addByStep<T, push<Res, '0'>, add<Seed, 1>, AddMap['1'][Cur[1]][0]>
            : addByStep<T, push<Res, CurPrev[0]>, add<Seed, 1>, Cur[1]>