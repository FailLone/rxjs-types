import { group } from './../frame/group';
import { end } from "../frame/end";
import { concat } from "../string/concat";
import { RenderItem } from "./renderItem";
import { frame } from '../frame';
import { error } from '../frame/error';
import { Observable } from '../observables/observable';
import { compare } from '../number/compare';
import { maxNestCount } from '../common/maxNestCount';
import { add } from '../number/add';
import { ellipsis } from '../frame/ellipsis';
import { forever } from '../frame/forever';

export type renderOne<T extends RenderItem> = `${frame<T['frame']>}${group<T['value']>}`

export type renderAll<T extends RenderItem[], Seed extends number = 0> =
    Seed extends maxNestCount
        ? ''
        : T extends [infer Item, ...infer Rest]
            ? concat<renderOne<Item & RenderItem>, renderAll<Rest extends RenderItem[] ? Rest : [], add<Seed, 1>>>
            : ''
export type renderTail<T extends Observable>
    = `${
        T['values']['length'] extends maxNestCount
            ? ellipsis
            : compare<T['values']['length'], maxNestCount> extends true
                ? ellipsis
                : ''
    }${
        T['isError'] extends true
            ? error
            : T['isEnd'] extends true
                ? end
                : forever
    }`
export type render<T extends Observable> =
    `${renderAll<T['values']>}${renderTail<T>}`
