import { add } from "../number/add";
import { bigAdd } from "../number/bigAdd";
import { getObservable, Observable, replaceValue } from "../observables/observable";
import { RenderItem } from "../render/renderItem";
import { concat } from "../string/concat";

export type reduce<T extends Observable> =
    T['isEnd'] extends true
        ? replaceValue<T, mergeFrame<reduceHelper<T['values']>>>
        : getObservable<[], false>

type reduceHelper<T extends RenderItem[], Prev extends number | string | void = void> =
    T extends [infer Item, ...infer Rest]
        ? Prev extends void
            ? [{ frame: (Item & RenderItem)['frame'], value: ''}, ...reduceHelper<Rest extends RenderItem[] ? Rest : [], (Item & RenderItem)['value'] & number | string>]
            : Prev extends string
                ? concat<Prev & string, (Item & RenderItem)['value'] & string> extends infer Next
                    ? [{ frame: (Item & RenderItem)['frame'], value: '' }, ...reduceHelper<Rest extends RenderItem[] ? Rest : [], Next & string>]
                    : never
                : add<Prev & number, (Item & RenderItem)['value'] & number> extends infer Next
                    ? [{ frame: (Item & RenderItem)['frame'], value: '' }, ...reduceHelper<Rest extends RenderItem[] ? Rest : [], Next & number>]
                    : never
        : [{ frame: '0', value: Prev & (string | number) }]

export type mergeFrame<T extends RenderItem[], Prev extends string = '0'> =
    T extends [infer Item, ...infer Rest]
        ? (Item & RenderItem)['value'] extends ''
            ? mergeFrame<Rest extends RenderItem[] ? Rest : [], bigAdd<Prev, (Item & RenderItem)['frame']>>
            : [{ value: (Item & RenderItem)['value'], frame: bigAdd<Prev, (Item & RenderItem)['frame']> }, ...mergeFrame<Rest extends RenderItem[] ? Rest : [], '0'>]
        : []