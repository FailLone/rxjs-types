import { add } from "../number/add";
import { Observable, replaceValue } from "../observables/observable";
import { RenderItem } from "../render/renderItem";
import { concat } from "../string/concat";

export type scan<T extends Observable> =
    replaceValue<T, scanHelper<T['values']>>

type scanHelper<T extends RenderItem[], Prev extends number | string | void = void> =
    T extends [infer Item, ...infer Rest]
        ? Prev extends void
            ? [Item, ...scanHelper<Rest extends RenderItem[] ? Rest : [], (Item & RenderItem)['value'] & number | string>]
            : Prev extends string
                ? concat<Prev & string, (Item & RenderItem)['value'] & string> extends infer Next
                    ? [{ frame: (Item & RenderItem)['frame'], value: Next }, ...scanHelper<Rest extends RenderItem[] ? Rest : [], Next & string>]
                    : never
                : add<Prev & number, (Item & RenderItem)['value'] & number> extends infer Next
                    ? [{ frame: (Item & RenderItem)['frame'], value: Next }, ...scanHelper<Rest extends RenderItem[] ? Rest : [], Next & number>]
                    : never
        : []