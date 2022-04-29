import { RenderItem } from "../render/renderItem";

export type Observable = {
    values: RenderItem[],
    isEnd: boolean,
    isError: boolean,
}

export type getObservable<values extends RenderItem[] = [], isEnd extends boolean = false, isError extends boolean = false> =
    {
        values: values;
        isEnd: isEnd;
        isError: isError;
    }

export type replaceValue<O extends Observable, Value extends RenderItem[]> = {
    values: Value;
    isEnd: O['isEnd'];
    isError: O['isError'];
}

export type replaceIsEnd<O extends Observable, isEnd extends boolean> = {
    values: O['values'];
    isEnd: isEnd;
    isError: O['isError'];
}

export type replaceIsError<O extends Observable, isError extends boolean> = {
    values: O['values'];
    isEnd: O['isEnd'];
    isError: isError;
}