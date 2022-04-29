import { getRenderItem } from '../render/renderItem';
import { stringLike } from './../string/stringLike';
import { getObservable } from './observable';

export type fromArray<T extends stringLike[]> =
    getObservable<{
        [K in keyof T]: getRenderItem<T[K] & stringLike>
    }, true>


export type fromPromise<T extends Promise<stringLike>> = T extends Promise<infer Res>
    ? getObservable<[getRenderItem<Res & stringLike>], true>
    : never
