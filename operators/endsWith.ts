import { stringLike } from "../string/stringLike"
import { getRenderItem } from "../render/renderItem"
import { Observable, replaceValue } from "../observables/observable"

export type endsWith<S extends Observable, T extends stringLike> =
    S['isEnd'] extends true
        ? replaceValue<S, [...S['values'], getRenderItem<T>]>
        : S
