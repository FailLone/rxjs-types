import { group } from './../frame/group';
import { end } from "../frame/end";
import { concat } from "../string/concat";
import { RenderItem } from "./renderItem";
import { frame } from '../frame';

export type renderOne<T extends RenderItem> =
    T['isInfinite'] extends false
        ?  `${frame<T['frame']>}${group<T['value']>}${T['isEnd'] extends true ? end : ''}`
        : '...'

export type render<T extends RenderItem[]> =
    T extends [infer Item, ...infer Rest]
        ? Item extends RenderItem
            ? Rest extends RenderItem[]
                ? concat<renderOne<Item>, render<Rest>>
                : renderOne<Item>
            : ''
        : ''
