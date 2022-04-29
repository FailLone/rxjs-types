import { bigAdd } from "../number/bigAdd";
import { Observable, replaceValue } from "../observables/observable";
import { RenderItem } from "../render/renderItem";

export type delay<O extends Observable, T extends number> =
    replaceValue<O, delayAll<O['values'], `${T}`>>

type delayAll<T extends RenderItem[], V extends string> =
    T extends [infer Item, ...infer Rest]
        ? [
            {
                value: (Item & RenderItem)['value'],
                frame: bigAdd<V, (Item & RenderItem)['frame']>
            },
            ...delayAll<Rest extends RenderItem[] ? Rest : [], V>
        ]
        : []
