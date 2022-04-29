import { add } from "../number/add";
import { compare } from "../string/compare";
import { RenderItem } from "../render/renderItem";
import { bigReduce } from '../number/bigReduce';
import { or } from '../common/or'
import { Observable } from './observable'
import { maxNestCount } from "../common/maxNestCount";

type mergeTwo<A extends RenderItem, B extends RenderItem>
    = A['frame'] extends B['frame']
        ? [A, { value: B['value'], frame: '0' }]
        : compare<A['frame'], B['frame']> extends true
            ? mergeTwo<B, A>
            : [A, {
                value: B['value'],
                frame: bigReduce<B['frame'], A['frame']>
            }]

type mergeValues<A extends RenderItem[], B extends RenderItem[], Seed extends number = 0>
    = Seed extends add<maxNestCount, 1>
        ? []
        : A extends [infer ItemA, ...infer RestA]
            ? B extends [infer ItemB, ...infer RestB]
                ? [...mergeTwo<ItemA & RenderItem, ItemB & RenderItem>, ...mergeValues<RestA extends RenderItem[] ? RestA : [], RestB extends RenderItem[] ? RestB : [], add<Seed, 2>>]
                : [ItemA, ...mergeValues<RestA extends RenderItem[] ? RestA : [], [], add<Seed, 1>>]
            : B extends [infer ItemB, ...infer RestB]
                ? [ItemB, ...mergeValues<[], RestB extends RenderItem[] ? RestB : [], add<Seed, 1>>]
                : []

export type merge<
    A extends Observable,
    B extends Observable,
>
    = {
        isError: or<A['isError'], B['isError']>,
        isEnd: or<A['isEnd'], B['isEnd']>
        values: mergeValues<A['values'], B['values']>,
    }
