import { anyIsError, removeVoid, totalIsEnd } from './../observables/zip';
import { Observable } from "../observables/observable";
import { RenderItem } from '../render/renderItem';
import { add } from '../number/add';
import { compare } from '../string/compare';
import { push } from '../array/push';

export type raceWith<
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
> = raceHelper<removeVoid<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12]>>


type raceHelper<T extends Observable[]> = {
    isError: anyIsError<T>,
    isEnd: totalIsEnd<T>,
    values: raceValues<T>
}

type raceValues<T extends Observable[], Index extends number = 0, Res extends RenderItem[] = []> =
    raceValue<T, Index> extends infer Item
        ? [Item] extends [never]
            ? Res
            : raceValues<T, add<Index, 1>, push<Res, Item & RenderItem>>
        : Res

type raceValue<T extends Observable[], Index extends number, Value extends RenderItem = never> =
    T extends [infer Item, ...infer Rest]
        ? Item extends Observable
            ? Rest extends Observable[]
                ? Item['values'][Index] extends undefined
                    ? Item['isError'] extends true
                        ? never
                        : raceValue<Rest, Index, Value>
                    : [Value] extends [never]
                        ? raceValue<Rest, Index, Item['values'][Index]>
                        : compare<Item['values'][Index]['frame'], Value['frame']> extends true
                            ? raceValue<Rest, Index, Value>
                            : raceValue<Rest, Index, Item['values'][Index]>
                : never
            : never
        : Value
