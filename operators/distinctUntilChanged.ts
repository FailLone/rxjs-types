import { leftGroup } from "../frame/leftGroup";
import { rightGroup } from "../frame/rightGroup";
import { RenderItem } from "../render/renderItem";
import { stringLike } from "../string/stringLike";

export type distinctUntilChanged<S extends RenderItem[]> =
    distinctHelper<S>

type distinctHelper<S extends RenderItem[], Prev extends stringLike = ''>
    = S extends [infer Item, ...infer Rest]
        ? Item extends RenderItem
            ? Rest extends RenderItem[]
                ? Prev extends Item['value']
                    ? distinctHelper<Rest, Prev>
                    : [Item, ...distinctHelper<Rest, Item['value']>]
                : S
            : S
        : S
