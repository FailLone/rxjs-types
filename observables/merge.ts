import { and } from './../common/and';
import { or } from "../common/or";
import { add } from "../number/add";
import { compare } from "../number/compare";
import { getRenderItem, RenderItem, replaceFrame, replaceIsEnd, replaceValue } from "../render/renderItem";
import { maxNestCount } from '../common/maxNestCount';

type match<T extends RenderItem, Cur extends number, Offset extends number = Cur>
    = T['isInfinite'] extends true
        ? T
        : Cur extends T['frame']
            ? replaceFrame<T, Offset>
            : match<T, add<Cur, 1>, add<Offset, 1>>

type mergeTwo<A extends RenderItem, B extends RenderItem>
    = and<A['isInfinite'], B['isInfinite']> extends true
        ? [A]
        : or<compare<A['frame'], B['frame']>, A['isInfinite']> extends true
            ? mergeTwo<B, A>
            : [replaceIsEnd<A, false>, replaceIsEnd<match<B, A['frame'], 0>, false>]

export type merge<A extends RenderItem[], B extends RenderItem[], Seed extends number = 0>
    = Seed extends add<maxNestCount, 1>
        ? [getRenderItem<0, 0, false, true>]
        : A extends [infer ItemA, ...infer RestA]
            ? B extends [infer ItemB, ...infer RestB]
                ? [...mergeTwo<ItemA & RenderItem, ItemB & RenderItem>, ...merge<RestA extends RenderItem[] ? RestA : [], RestB extends RenderItem[] ? RestB : [], add<Seed, 2>>]
                : A
            : B
