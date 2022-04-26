import { includes } from "../array/include";
import { push } from "../array/push";
import { RenderItem } from "../render/renderItem";
import { stringLike } from "../string/stringLike";

export type distinct<S extends RenderItem[]> =
    distinctHelper<S, []>

type distinctHelper<S extends RenderItem[], Prev extends stringLike[]>
    = S extends [infer Item, ...infer Rest]
        ? Item extends RenderItem
            ? Rest extends RenderItem[]
                ? includes<Prev, Item['value']> extends true
                    ? distinctHelper<Rest, Prev>
                    : [Item, ...distinctHelper<Rest, push<Prev, Item['value']>>]
                : S
            : S
        : S