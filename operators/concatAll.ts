import { getObservable, Observable, replaceValue } from "../observables/observable";

export type concatAll<T extends Observable[]> =
    T extends [infer Item, ...infer Rest]
        ? Item extends Observable
            ? Item['isEnd'] extends false
                ? Item
                : concatAll<Rest extends Observable[] ? Rest : never> extends infer Res
                    ? replaceValue<
                            Res & Observable,
                            [
                                ...Item['values'],
                                ...(Res extends Observable ? Res : never)['values']
                            ]
                        >
                    : never
            : never
        : getObservable<[], true>
