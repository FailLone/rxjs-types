import { Observable } from './observable';
import { unionToTuple } from '../common/unionToTuple';
import { join } from '../array/join';
import { stringLike } from '../string/stringLike';
import { RenderItem } from '../render/renderItem';
import { push } from '../array/push';
import { add } from '../number/add';
import { max } from '../string/max';
import { and } from '../common/and';

export type zip<
    T1 extends Observable,
    T2 extends Observable,
    T3 extends Observable | void = void,
    T4 extends Observable | void = void,
    T5 extends Observable | void = void,
    T6 extends Observable | void = void,
    T7 extends Observable | void = void,
    T8 extends Observable | void = void,
    T9 extends Observable | void = void,
    T10 extends Observable | void = void,
    T11 extends Observable | void = void,
    T12 extends Observable | void = void
> = zipHelper<
    removeVoid<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12]>
>

type removeVoid<T extends (Observable | void)[]> =
    T extends [infer Item, ...infer Rest]
            ? Item extends Observable
                ? [Item, ...removeVoid<Rest extends (Observable | void)[] ? Rest : []>]
                : removeVoid<Rest extends (Observable | void)[] ? Rest : []>
            : []

type zipHelper<T extends Observable[]> =
    {
        isError: anyIsError<T>,
        isEnd: and<totalIsEnd<T>, totalSameLen<T>>,
        values: zipValues<T>
    }


type zipValues<T extends Observable[], Index extends number = 0, Res extends RenderItem[] = []> =
    zipValue<T, Index> extends infer Item
        ? Item extends stringLike[]
            ? Item['length'] extends 0
                ? Res
                : zipValues<T, add<Index, 1>, push<Res, {
                    value: join<Item extends unknown[] ? Item : []>,
                    frame: max<unionToTuple<T[number]['values'][Index]['frame']>>
                }>>
            : never
        : never


type zipValue<T extends Observable[], Index extends number, Value extends stringLike[] = []> =
        T extends [infer Item, ...infer Rest]
            ? Item extends Observable
                ? Item['values']['length'] extends Index
                    ? []
                    : zipValue<Rest extends Observable[] ? Rest : [], Index, push<Value, Item['values'][Index]['value']>>
                : never
            : Value

type totalSameLen<T extends Observable[]> =
        unionToTuple<T[number]['values']['length']>['length'] extends 1 ? true : false

type totalIsEnd<T extends Observable[]> =
        T[number]['isEnd'] extends true ? true : false

type anyIsError<T extends Observable[]> =
        T[number]['isError'] extends false ? false : true
