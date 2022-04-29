import { group } from './../frame/group';
import { end } from "../frame/end";
import { concat } from "../string/concat";
import { getRenderItem, RenderItem } from "./renderItem";
import { frame } from '../frame';
import { error } from '../frame/error';
import { getObservable, Observable } from '../observables/observable';

export type renderOne<T extends RenderItem> = `${frame<T['frame']>}${group<T['value']>}`

export type renderAll<T extends RenderItem[]> =
    T extends [infer Item, ...infer Rest]
        ? concat<renderOne<Item & RenderItem>, renderAll<Rest extends RenderItem[] ? Rest : []>>
        : ''

export type render<T extends Observable> =
    `${renderAll<T['values']>}${T['isError'] extends true ? error : T['isEnd'] extends true ? end : T['isInfinite'] extends true ? '...' : ''}`
