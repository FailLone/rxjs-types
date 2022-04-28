import { includes } from "../array/include";
import { push } from "../array/push";
import { RenderItem } from "../render/renderItem";
import { stringLike } from "../string/stringLike";

export type distinct<S extends RenderItem[]> =
    distinctHelper<S, []>

type distinctHelper<S extends RenderItem[], Prev extends stringLike[]>
    = S extends [infer Item, ...infer Rest]
        ? includes<Prev, (Item & RenderItem)['value']> extends true
            ? distinctHelper<Rest extends RenderItem[] ? Rest : [], Prev>
            : [Item, ...distinctHelper<Rest extends RenderItem[] ? Rest : [], push<Prev, (Item & RenderItem)['value']>>]
        : S
