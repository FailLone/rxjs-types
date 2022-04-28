import { getRenderItem, RenderItem, replaceIsEnd } from "../render/renderItem";
import { compare } from '../number/compare';
import { maxNestCount } from '../common/maxNestCount';
import { add } from '../number/add';

export type repeat<T extends RenderItem[], Count extends number | void = void, Delay extends number = 0> =
    Count extends 0
        ? [getRenderItem<'', 0, true>]
        : compare<T['length'], maxNestCount> extends false
            ? T extends [...infer Before, infer Item]
                ? (Item & RenderItem)['isEnd'] extends true
                    ? repeatHelper<
                        [...Before extends RenderItem[] ? Before : [], replaceIsEnd<(Item & RenderItem), false>],
                        Count,
                        Delay
                    >
                    : T
                : T
            : T

type repeatHelper<
    T extends RenderItem[],
    Count extends number | void = void,
    Delay extends number = 0,
    Seed extends number = 0,
    Next extends RenderItem[] = [],
    Res extends RenderItem[] = T
> =
    Res['length'] extends maxNestCount
        ? [...Res, getRenderItem<0, 0, false, true>]
        : Next extends [infer Item, ...infer Rest]
            ? repeatHelper<T, Count, Delay, Seed, Rest extends RenderItem[] ? Rest : [], [...Res, Item & RenderItem]>
            : Count extends Seed
                ? [...Res, getRenderItem<'', 0, true>]
                : repeatHelper<T, Count, Delay, add<Seed, 1>, T, [...Res, getRenderItem<'', Delay>]>