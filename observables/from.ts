import { render } from './../render/index';
import { getRenderItem } from '../render/renderItem';
import { push } from './../array/push';
import { stringLike } from './../string/stringLike';

export type fromArray<T extends stringLike[]> =
    push<{
        [K in keyof T]: getRenderItem<T[K] extends stringLike ? T[K] : ''>
    }, getRenderItem<'', 0, true>>


export type fromPromise<T extends Promise<stringLike>> = T extends Promise<infer Res>
    ? Res extends stringLike
        ? getRenderItem<Res, 0, true>
        : never
    : never
