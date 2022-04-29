import { stringLike } from '../string/stringLike';
import { RenderItem } from '../render/renderItem';
import { Observable, replaceValue as replaceValues } from '../observables/observable';

export type mapTo<O extends Observable, T extends stringLike | Observable> =
    T extends stringLike
        ? replaceValues<O, mapAll<O['values'], T>>
        : mapAll<O['values'], T>

type mapAll<T extends RenderItem[], V extends stringLike | Observable> =
    T extends [infer Item, ...infer Rest]
        ? [V extends stringLike ? {
            value: V,
            frame: (Item & RenderItem)['frame']
        } : V, ...mapAll<Rest extends RenderItem[] ? Rest : [], V>]
        : []

