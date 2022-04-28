import { leftGroup } from "../frame/leftGroup";
import { rightGroup } from "../frame/rightGroup";
import { RenderItem } from "../render/renderItem";
import { stringLike } from "../string/stringLike";

export type distinctUntilChanged<S extends RenderItem[]> =
    distinctHelper<S>

type distinctHelper<S extends RenderItem[], Prev extends stringLike = ''>
    = S extends [infer Item, ...infer Rest]
        ? Prev extends (Item & RenderItem)['value']
            ? distinctHelper<Rest extends RenderItem[] ? Rest : [], Prev>
            : [Item, ...distinctHelper<Rest extends RenderItem[] ? Rest : [], (Item & RenderItem)['value']>]
        : S
