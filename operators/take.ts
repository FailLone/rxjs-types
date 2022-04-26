import { push } from './../array/push';
import { rightGroup } from './../frame/rightGroup';
import { leftGroup } from './../frame/leftGroup';
import { end } from "../frame/end";
import { isEqual } from '../number/isEqual';
import { add } from '../number/add';
import { RenderItem } from '../render/renderItem';

export type take<S extends RenderItem[], Count extends number> =
    takeHelper<S, Count>

type takeHelper<S extends RenderItem[], Count extends number, Res extends RenderItem[] = [], Seed extends number = 0> =
    isEqual<Count, Seed> extends true
        ? Res
        : S extends [infer Item, ...infer Rest]
            ? Rest extends RenderItem[]
                ? Item extends RenderItem
                    ? takeHelper<Rest, Count, push<Res, Item>, add<Seed, 1>>
                    : Res
                : Res
            : Res