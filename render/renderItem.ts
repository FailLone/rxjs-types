import { stringLike } from "../string/stringLike";
export interface RenderItem {
    value: stringLike;
    frame: string;
}

export type getRenderItem<Value extends stringLike, Frame extends string = '0'> = {
    value: Value;
    frame: Frame;
}
