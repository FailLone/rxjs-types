import { add } from "../number/add";
import { getRenderItem, RenderItem, replaceFrame } from "../render/renderItem";
import { stringLike } from "../string/stringLike";

export type filter<T extends RenderItem[], Match extends stringLike> =
    filterHelper<T, Match>

type filterHelper<T extends RenderItem[], Match extends stringLike, Frame extends number = 0> =
    T extends [infer Item, ...infer Rest]
        ? (Item & RenderItem)['value'] extends Match
            ? [
                replaceFrame<(Item & RenderItem), add<Frame, (Item & RenderItem)['frame']>>,
                ...filterHelper<Rest extends RenderItem[] ? Rest : [], Match>
            ]
            : Rest['length'] extends 0
                ? (Item & RenderItem)['isEnd'] extends true
                    ? [getRenderItem<'', 0, true>]
                    : (Item & RenderItem)['isInfinite'] extends true
                        ? [Item]
                        : []
                : filterHelper<Rest extends RenderItem[] ? Rest : [], Match, add<Frame, (Item & RenderItem)['frame']>>
        : []