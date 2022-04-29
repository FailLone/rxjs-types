import { add } from "../number/add";
import { unshift } from "./unshift";
export type reverse<T extends unknown[]> = reverseHelper<T>

type reverseHelper<T extends unknown[], Seed extends number = 0, Res extends unknown[] = []> =
    Res['length'] extends T['length']
        ? Res
        : reverseHelper<T, add<Seed, 1>, unshift<Res, T[Seed]>>
