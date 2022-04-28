import { add } from '../number/add';
import { RenderItem, replaceFrame } from './../render/renderItem';

export type skip<T extends RenderItem[], I extends number> =
    skipHelper<T, I>

type skipHelper<T extends RenderItem[], I extends number, Seed extends number = 0, PrevFrame extends number = 0> =
    T extends [infer Item, ...infer Rest]
        ? I extends Seed
            ? [replaceFrame<Item & RenderItem, add<PrevFrame, (Item & RenderItem)['frame']>>, ...Rest]
            : Rest extends RenderItem[]
                ? skipHelper<Rest, I, add<Seed, 1>, add<PrevFrame, (Item & RenderItem)['frame']>>
                : T
        : T
