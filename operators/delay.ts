import { add } from "../number/add";
import { RenderItem, replaceFrame } from "../render/renderItem";

export type delay<O extends RenderItem[], T extends number> =
{
    [Key in keyof O]: replaceFrame<O[Key] & RenderItem, add<T, (O[Key] & RenderItem)['frame']>>
}
