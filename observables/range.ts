import { maxNestCount } from './../common/maxNestCount';
import { getRenderItem, RenderItem } from "../render/renderItem"
import { add } from '../number/add';
import { getObservable } from './observable';

export type range<From extends number, To extends number> =
    rangeHelper<From, To>

type rangeHelper<From extends number, To extends number, Res extends RenderItem[] = []>
    = From extends To
        ? getObservable<
            [...Res, getRenderItem<From, '0'>],
            true
        >
        : rangeHelper<add<From, 1>, To, [...Res, getRenderItem<From, '0'>]>