import { stringLike } from '../string/stringLike';
import { RenderItem } from '../render/renderItem';
import { Observable, replaceValue as replaceValues } from '../observables/observable';

export type mapTo<O extends Observable, T extends stringLike> =
    replaceValues<O, mapAll<O['values'], T>>

type mapAll<T extends RenderItem[], V extends stringLike> =
    T extends [infer Item, ...infer Rest]
        ? [{
            value: V,
            frame: (Item & RenderItem)['frame']
        }, ...mapAll<Rest extends RenderItem[] ? Rest : [], V>]
        : []