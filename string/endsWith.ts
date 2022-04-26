export type endsWith<Str extends string, T extends string> =
    Str extends `${infer Rest}${T}`
        ? true
        : false
