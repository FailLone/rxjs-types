import { RenderItem } from "../render/renderItem";

export type Observable = {
    values: RenderItem[],
    isEnd: boolean,
    isInfinite: boolean,
    isError: boolean,
}

export type getObservable<values extends RenderItem[] = [], isEnd extends boolean = false, isInfinite extends boolean = false, isError extends boolean = false> =
    {
        values: values;
        isEnd: isEnd;
        isInfinite: isInfinite;
        isError: isError;
    }

export type replaceValue<O extends Observable, Value extends RenderItem[]> = {
    values: Value;
    isEnd: O['isEnd'];
    isInfinite: O['isInfinite'];
    isError: O['isError'];
}

export type replaceIsEnd<O extends Observable, isEnd extends boolean> = {
    values: O['values'];
    isEnd: isEnd;
    isInfinite: O['isInfinite'];
    isError: O['isError'];
}

export type replaceIsInfinite<O extends Observable, IsInfinite extends boolean> = {
    values: O['values'];
    isEnd: O['isEnd'];
    isInfinite: IsInfinite;
    isError: O['isError'];
}

export type replaceIsError<O extends Observable, isError extends boolean> = {
    values: O['values'];
    isEnd: O['isEnd'];
    isInfinite: O['isInfinite'];
    isError: isError;
}