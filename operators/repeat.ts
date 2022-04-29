import { RenderItem } from "../render/renderItem";
import { compare } from '../number/compare';
import { maxNestCount } from '../common/maxNestCount';
import { add } from '../number/add';
import { getObservable, Observable, replaceValue } from "../observables/observable";
import { bigAdd } from "../number/bigAdd";

export type repeat<T extends Observable, Count extends number | void = void, Delay extends number = 0> =
    Count extends 0
        ? [getObservable<[], true>]
        : T['isEnd'] extends true
            ? compare<T['values']['length'], maxNestCount> extends false
                ? replaceValue<T, repeatHelper<
                        T['values'],
                        Count,
                        `${Delay}`
                    >
                >
                : T
            : T

type repeatHelper<
    T extends RenderItem[],
    Count extends number | void = void,
    Delay extends string = `0`,
    Seed extends number = 0,
    Next extends RenderItem[] = [],
    Res extends RenderItem[] = T
> =
    Res['length'] extends maxNestCount
        ? Res
        : Next extends [infer Item, ...infer Rest]
            ? Next['length'] extends T['length']
                ? bigAdd<Delay, (Item & RenderItem)['frame']> extends `${infer NewFrame}`
                    ? repeatHelper<
                            T,
                            Count,
                            Delay,
                            Seed,
                            Rest extends RenderItem[] ? Rest : [],
                            [...Res, {
                                value: (Item & RenderItem)['value'],
                                frame: NewFrame
                            }]
                    >
                    : never
                : repeatHelper<
                        T,
                        Count,
                        Delay,
                        Seed,
                        Rest extends RenderItem[] ? Rest : [],
                        [...Res, Item & RenderItem]
                >
            : Count extends Seed
                ? Res
                : repeatHelper<T, Count, Delay, add<Seed, 1>, T, Res>