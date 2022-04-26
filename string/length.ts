import { add } from './../number/add';
import { from } from "./from";
import { stringLike } from "./stringLike";

export type length<T extends stringLike, Seed extends number = 0> =
    from<T> extends `${infer Item}${infer Rest}`
        ? length<Rest, add<Seed, 1>>
        : from<T> extends ''
            ? Seed
            : add<Seed, 1>
