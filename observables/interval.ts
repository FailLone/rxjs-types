import { push } from "../array/push";
import { maxNestCount } from "../common/maxNestCount";
import { add } from "../number/add";
import { getRenderItem, RenderItem } from "../render/renderItem";
import { getObservable } from "./observable";

export type interval<I extends number> =
    getObservable<
        intervalHelper<I>,
        false,
        true
    >

export type intervalHelper<I extends number, Seed extends number = 0, Cur extends RenderItem[] = []> =
    Seed extends maxNestCount
        ? Cur
        : intervalHelper<
            I,
            add<Seed, 1>,
            push<Cur, getRenderItem<Seed, `${I}`>>
        >