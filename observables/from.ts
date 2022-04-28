import { render } from './../render/index';
import { getRenderItem } from '../render/renderItem';
import { push } from './../array/push';
import { stringLike } from './../string/stringLike';

export type fromArray<T extends stringLike[]> =
    T extends [...infer Before, infer Last]
        ? push<{
                [K in keyof Before]: getRenderItem<Before[K] & stringLike>
            }, getRenderItem<Last & stringLike, 0, true>>
        : getRenderItem<'', 0, true>


export type fromPromise<T extends Promise<stringLike>> = T extends Promise<infer Res>
    ? getRenderItem<Res & stringLike, 0, true>
    : never
