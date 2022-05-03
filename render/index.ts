import { group } from './../frame/group';
import { end } from "../frame/end";
import { concat } from "../string/concat";
import { RenderItem } from "./renderItem";
import { frame } from '../frame';
import { error } from '../frame/error';
import { Observable } from '../observables/observable';
import { maxNestCount } from '../common/maxNestCount';
import { ellipsis } from '../frame/ellipsis';
import { forever } from '../frame/forever';
import { push } from '../array/push';
import { join } from '../array/join'

export type renderOne<T extends RenderItem> = `${frame<T['frame']>}${group<T['value']>}`

export type renderAll<T extends RenderItem[], Res extends string[] = []> =
    Res['length'] extends maxNestCount
        ? push<Res, ellipsis>
        : T extends [infer Item, ...infer Rest]
            ? renderAll<Rest extends RenderItem[] ? Rest : never, push<Res, renderOne<Item & RenderItem>>>
            : Res

export type renderTail<T extends Observable>
    = `${
        T['isError'] extends true
            ? error
            : T['isEnd'] extends true
                ? end
                : forever
    }`

export type render<T extends Observable, Head extends string = join<renderAll<T['values']>, ''>, Tail extends string = renderTail<T>> =
    `${Head}${Tail}`
