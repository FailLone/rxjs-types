import { bigAdd } from "../number/bigAdd";
import { Observable, replaceValue } from "../observables/observable";
import { RenderItem } from "../render/renderItem";
import { stringLike } from "../string/stringLike";
import { includes } from '../array/include'

export type filter<T extends Observable, Match extends stringLike[]> =
    replaceValue<T, filterHelper<T['values'], Match>>

export type filterHelper<T extends RenderItem[], Match extends stringLike[], Frame extends string = '0'> =
    T extends [infer Item, ...infer Rest]
        ? bigAdd<Frame, (Item & RenderItem)['frame']> extends `${infer NewFrame}`
            ? includes<Match, (Item & RenderItem)['value']> extends true
                ? [
                    {
                        value: (Item & RenderItem)['value'],
                        frame: NewFrame
                    },
                    ...filterHelper<Rest extends RenderItem[] ? Rest : [], Match>
                ]
                : filterHelper<Rest extends RenderItem[] ? Rest : [], Match, NewFrame>
            : never
        : []