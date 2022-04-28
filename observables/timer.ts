import { getRenderItem } from "../render/renderItem";
import { intervalHelper } from "./interval";

export type timer<T extends number, I extends number | void = void> =
    I extends void
        ? [getRenderItem<0, T, true>]
        : [getRenderItem<0, T, false>, ...intervalHelper<I & number, 1>]