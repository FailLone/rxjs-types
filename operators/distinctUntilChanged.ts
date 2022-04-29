import { Observable, replaceValue } from "../observables/observable";
import { RenderItem } from "../render/renderItem";
import { stringLike } from "../string/stringLike";

export type distinctUntilChanged<S extends Observable> =
    replaceValue<S, distinctHelper<S['values']>>

type distinctHelper<S extends RenderItem[], Prev extends stringLike = ''>
    = S extends [infer Item, ...infer Rest]
        ? Prev extends (Item & RenderItem)['value']
            ? distinctHelper<Rest extends RenderItem[] ? Rest : [], Prev>
            : [Item, ...distinctHelper<Rest extends RenderItem[] ? Rest : [], (Item & RenderItem)['value']>]
        : S
