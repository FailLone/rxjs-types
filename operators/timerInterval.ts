import { Observable, replaceValue } from "../observables/observable";
import { RenderItem } from "../render/renderItem";

export type timerInterval<T extends Observable> =
    replaceValue<T, timerIntervalHelper<T['values']>>

type timerIntervalHelper<T extends RenderItem[]> =
    T extends [infer Item, ...infer Rest]
        ? Item extends RenderItem
            ? [{
                frame: Item['frame'],
                value: `${Item['value']},${Item['frame']}`
            }, ...timerIntervalHelper<Rest extends RenderItem[] ? Rest : never>]
            : never
        : T