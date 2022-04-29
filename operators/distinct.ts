import { includes } from "../array/include";
import { push } from "../array/push";
import { Observable, replaceValue } from "../observables/observable";
import { RenderItem } from "../render/renderItem";
import { stringLike } from "../string/stringLike";

export type distinct<O extends Observable> =
    replaceValue<O, distinctHelper<O['values'], []>>

type distinctHelper<S extends RenderItem[], Prev extends stringLike[]>
    = S extends [infer Item, ...infer Rest]
        ? includes<Prev, (Item & RenderItem)['value']> extends true
            ? distinctHelper<Rest extends RenderItem[] ? Rest : [], Prev>
            : [Item, ...distinctHelper<Rest extends RenderItem[] ? Rest : [], push<Prev, (Item & RenderItem)['value']>>]
        : S
