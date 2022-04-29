import { add } from '../number/add';
import { bigAdd } from '../number/bigAdd';
import { Observable, replaceValue } from '../observables/observable';
import { RenderItem } from './../render/renderItem';

export type skip<T extends Observable, I extends number> =
    replaceValue<T, skipHelper<T['values'], I>>

type skipHelper<T extends RenderItem[], I extends number, Seed extends number = 0, PrevFrame extends string = `${0}`> =
    T extends [infer Item, ...infer Rest]
        ? bigAdd<PrevFrame, (Item & RenderItem)['frame']> extends `${infer NewFrame}`
            ? I extends Seed
                ? [{ value: (Item & RenderItem)['value'], frame: NewFrame }, ...Rest]
                : Rest extends RenderItem[]
                    ? skipHelper<Rest, I, add<Seed, 1>, NewFrame>
                    : T
            : never
        : T
