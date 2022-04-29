import { Observable, replaceValue } from "../observables/observable";
import { getRenderItem } from "../render/renderItem";
import { stringLike } from "../string/stringLike";

export type startsWith<S extends Observable, T extends stringLike> = replaceValue<S, [getRenderItem<T>, ...S['values']]>