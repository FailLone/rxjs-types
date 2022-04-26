export type startsWith<Str extends string, T extends string> =
    Str extends `${T}${infer Rest}`
        ? true
        : false
