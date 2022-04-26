import { group } from "../frame/group";
import { getRenderItem, RenderItem } from "../render/renderItem";
import { stringLike } from "../string/stringLike";

export type startsWith<S extends RenderItem[], T extends stringLike> =
    [getRenderItem<T>, ...S]