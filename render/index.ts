import { group } from './../frame/group';
import { end } from "../frame/end";
import { oneFrame } from "../frame/oneFrame";
import { concat } from "../string/concat";
import { repeat } from "../string/repeat";
import { RenderItem } from "./renderItem";

export type renderOne<T extends RenderItem> =
    T['isInfinite'] extends false
        ?  `${repeat<oneFrame, T['frame']>}${group<T['value']>}${T['isEnd'] extends true ? end : ''}`
        : '...'

export type render<T extends RenderItem[]> =
    T extends [infer Item, ...infer Rest]
        ? Item extends RenderItem
            ? Rest extends RenderItem[]
                ? concat<renderOne<Item>, render<Rest>>
                : renderOne<Item>
            : ''
        : ''
