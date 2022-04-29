import { getRenderItem } from "../render/renderItem";
import { intervalHelper } from "./interval";
import { getObservable } from "./observable";

export type timer<T extends number, I extends number | void = void> =
    I extends void
        ? getObservable<[
            getRenderItem<0, `${T}`>
        ], true>
        : getObservable<[
            getRenderItem<0, `${T}`>,
            ...intervalHelper<I & number, 1>
        ], false, true>