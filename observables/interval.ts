import { push } from "../array/push";
import { maxNestCount } from "../common/maxNestCount";
import { add } from "../number/add";
import { getRenderItem, RenderItem } from "../render/renderItem";

export type interval<I extends number> =
    intervalHelper<I>

export type intervalHelper<I extends number, Seed extends number = 0, Cur extends RenderItem[] = []> =
    Seed extends maxNestCount
        ? push<Cur, getRenderItem<'', 0, false, true>>
        : intervalHelper<
            I,
            add<Seed, 1>,
            push<Cur, getRenderItem<Seed, I, false, false>>
        >