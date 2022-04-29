import { getObservable, Observable, replaceValue } from "../observables/observable";
import { RenderItem } from "../render/renderItem";
import { stringLike } from "../string/stringLike";
import { filterHelper } from "./filter";

export type single<T extends Observable, Match extends stringLike[] | void = void> =
    T['isEnd'] extends true
        ? Match extends void
            ? T['values']['length'] extends 1
                ? T
                : getObservable<[], false, true>
            : singleHelper<T, Match extends stringLike[] ? Match : never>
        : getObservable<[], false, true>


type singleHelper<T extends Observable, Match extends stringLike[], Res extends RenderItem[] = filterHelper<T['values'], Match>> =
    Res['length'] extends 1
        ? replaceValue<T, Res>
        : getObservable<[], false, true>
