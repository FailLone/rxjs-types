import { stringLike } from "../string/stringLike"
import { getRenderItem, RenderItem } from "../render/renderItem"

export type endsWith<S extends RenderItem[], T extends stringLike> =
    S extends [...infer Before, infer Item]
        ? Item extends RenderItem
            ? Item['isEnd'] extends true
                ? [...Before, getRenderItem<Item['value'], Item['frame']>, getRenderItem<T, 0, true>]
                : S
            : S
        : S