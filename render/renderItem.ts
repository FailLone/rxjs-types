import { stringLike } from "../string/stringLike";

export interface RenderItem {
    value: stringLike;
    frame: number;
    isEnd: boolean;
    isInfinite: boolean;
}

export type getRenderItem<Value extends stringLike, Frame extends number = 0, IsEnd extends boolean = false, IsInfinite extends boolean = false> = {
    value: Value;
    frame: Frame;
    isEnd: IsEnd;
    isInfinite: IsInfinite;
}

export type replaceValue<O extends RenderItem, T extends stringLike> = {
    value: T,
    frame: O['frame'],
    isInfinite: O['isInfinite'],
    isEnd: O['isEnd']
}

export type replaceFrame<O extends RenderItem, T extends number> = {
    value: O['value'],
    frame: T,
    isInfinite: O['isInfinite'],
    isEnd: O['isEnd']
}

export type replaceIsEnd<O extends RenderItem, T extends boolean = O['isEnd'] extends true ? false : true> = {
    value: O['value'],
    frame: O['frame'],
    isInfinite: O['isInfinite'],
    isEnd: T
}

export type replaceIsInfinite<O extends RenderItem, T extends boolean = O['isInfinite'] extends true ? false : true> = {
    value: O['value'],
    frame: O['frame'],
    isInfinite: T,
    isEnd: O['isEnd']
}
