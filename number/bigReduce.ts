import { last } from './../array/last';
import { compare } from './../string/compare';
import { Numbers, NumericCharacters, fillZero, reverseAll } from './bigAdd';
import { add } from './add';
import { toNumber } from '../string/toNumber';
import { push } from '../array/push';
import { join } from '../array/join';
import { reverse } from '../array/reverse';
import { stringLike } from '../string/stringLike';
import { pop } from '../array/pop';
 export type bigReduce<A extends string, B extends string> =
    A extends B
        ? '0'
        : reduceByStep<reverseAll<fillZero<A extends NumericCharacters ? A : never, B extends NumericCharacters ? B : never>>> extends infer Res
            ? Res extends stringLike[]
                ? join<reverse<Res>, ''>
                : never
            : never

type reduceByStep<
    T extends [`${Numbers}`[], `${Numbers}`[]],
    Seed extends number = 0,
    Prev extends `${Numbers}` = '0',
    Res extends `${Numbers}`[] = [],
    CurPrev extends reduceMap[Numbers][Numbers] = reduceMap[T[0][Seed]][Prev],
    Cur extends reduceMap[Numbers][Numbers] = reduceMap[CurPrev[0]][T[1][Seed]],
    NextPrev extends string = `${add<toNumber<CurPrev[1]>, toNumber<Cur[1]>>}`,
> = Seed extends T[0]['length']
    ? removeZero<Res>
    : reduceByStep<
        T,
        add<Seed, 1>,
        NextPrev extends `${Numbers}` ? NextPrev : never,
        push<Res, Cur[0]>
    >

type removeZero<T extends `${Numbers}`[]> =
    last<T> extends '0'
        ? removeZero<pop<T> extends `${Numbers}`[] ? pop<T> : []>
        : T

type reduceMap = [
    [
        ["0", "0"], // 00
        ["9", "1"], // 01
        ["8", "1"], // 02
        ["7", "1"], // 03
        ["6", "1"], // 04
        ["5", "1"], // 05
        ["4", "1"], // 06
        ["3", "1"], // 07
        ["2", "1"], // 08
        ["1", "1"] // 09
    ],
    [
        ["1", "0"], // 10
        ["0", "0"], // 11
        ["9", "1"], // 12
        ["8", "1"], // 13
        ["7", "1"], // 14
        ["6", "1"], // 15
        ["5", "1"], // 16
        ["4", "1"], // 17
        ["3", "1"], // 18
        ["2", "1"] // 19
    ],
    [
        ["2", "0"], // 20
        ["1", "0"], // 21
        ["0", "0"], // 22
        ["9", "1"], // 23
        ["8", "1"], // 24
        ["7", "1"], // 25
        ["6", "1"], // 26
        ["5", "1"], // 27
        ["3", "1"], // 28
        ["3", "1"] // 29
    ],
    [
        ["3", "0"], // 30
        ["2", "0"], // 31
        ["1", "0"], // 32
        ["0", "0"], // 33
        ["9", "1"], // 34
        ["8", "1"], // 35
        ["7", "1"], // 36
        ["6", "1"], // 37
        ["5", "1"], // 38
        ["4", "1"] // 39
    ],
    [
        ["4", "0"], // 40
        ["3", "0"], // 41
        ["2", "0"], // 42
        ["1", "0"], // 43
        ["0", "0"], // 44
        ["9", "1"], // 45
        ["8", "1"], // 46
        ["7", "1"], // 47
        ["6", "1"], // 48
        ["5", "1"] // 49
    ],
    [
        ["5", "0"], // 50
        ["4", "0"], // 51
        ["3", "0"], // 52
        ["2", "0"], // 53
        ["1", "0"], // 54
        ["0", "0"], // 55
        ["9", "1"], // 56
        ["8", "1"], // 57
        ["7", "1"], // 58
        ["6", "1"] // 59
    ],
    [
        ["6", "0"], // 60
        ["5", "0"], // 61
        ["4", "0"], // 62
        ["3", "0"], // 63
        ["2", "0"], // 64
        ["1", "0"], // 65
        ["0", "0"], // 66
        ["9", "1"], // 67
        ["8", "1"], // 68
        ["7", "1"] // 69
    ],
    [
        ["7", "0"], // 70
        ["6", "0"], // 71
        ["5", "0"], // 72
        ["4", "0"], // 73
        ["3", "0"], // 74
        ["2", "0"], // 75
        ["1", "0"], // 76
        ["0", "0"], // 77
        ["9", "1"], // 78
        ["8", "1"] // 79
    ],
    [
        ["8", "0"], // 80
        ["7", "0"], // 81
        ["6", "0"], // 82
        ["5", "0"], // 83
        ["4", "0"], // 84
        ["3", "0"], // 85
        ["2", "0"], // 86
        ["1", "0"], // 87
        ["0", "0"], // 88
        ["9", "1"] // 89
    ],
    [
        ["9", "0"], // 90
        ["8", "0"], // 91
        ["7", "0"], // 92
        ["6", "0"], // 93
        ["5", "0"], // 94
        ["4", "0"], // 95
        ["3", "0"], // 96
        ["2", "0"], // 97
        ["1", "0"], // 98
        ["0", "0"] // 99
    ]
]