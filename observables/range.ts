import { maxNestCount } from './../common/maxNestCount';
import { getRenderItem, RenderItem } from "../render/renderItem"
import { add } from '../number/add';

export type range<From extends number, To extends number> =
    rangeHelper<From, To>

type rangeHelper<From extends number, To extends number, Res extends RenderItem[] = []>
    = From extends To
        ? [...Res, getRenderItem<From, 0>, getRenderItem<'', 0, true>]
        : Res['length'] extends maxNestCount
            ? [...Res, getRenderItem<'', 0, false, true>]
            : rangeHelper<add<From, 1>, To, [...Res, getRenderItem<From, 0>]>