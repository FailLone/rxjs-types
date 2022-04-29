type map = {
    '0': [],
    '1': [unknown],
    '2': [unknown, ...map['1']],
    '3': [unknown, ...map['2']],
    '4': [unknown, ...map['3']],
    '5': [unknown, ...map['4']],
    '6': [unknown, ...map['5']],
    '7': [unknown, ...map['6']],
    '8': [unknown, ...map['7']],
    '9': [unknown, ...map['8']],
}

type tenTimes<T extends unknown[]> =
    [
        ...T,
        ...T,
        ...T,
        ...T,
        ...T,
        ...T,
        ...T,
        ...T,
        ...T,
        ...T,
    ]

export type toNumber<T extends string, Res extends unknown[] = []> =
    T extends `${infer A}${infer B}`
        ? toNumber<B, [...tenTimes<Res>, ...A extends keyof map ? map[A] : never]>
        : Res['length']
