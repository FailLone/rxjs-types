import { bigAdd } from "../number/bigAdd";
import { compare } from "../number/compare";
import { getObservable, Observable, replaceValue } from "../observables/observable";
import { RenderItem } from "../render/renderItem";
import { mergeFrame } from "./reduce";

export type max<T extends Observable> =
    T['isEnd'] extends true
        ? replaceValue<T, mergeFrame<maxHelper<T['values']>>>
        : getObservable<[], false>

type maxHelper<T extends RenderItem[], Prev extends RenderItem | void = void> =
    T extends [infer Item, ...infer Rest]
        ? [
            {
                value: '',
                frame: (Item & RenderItem)['frame']
            },
            ...maxHelper<
                Rest extends RenderItem[] ? Rest : [],
                Prev extends void
                    ? Item & RenderItem
                    : compare<(Item & RenderItem)['value'] & number, (Prev & RenderItem)['value'] & number> extends true
                        ? Item & RenderItem
                        : Prev
                >
        ]
        : [{
            value: (Prev & RenderItem)['value'],
            frame: '0'
        }]