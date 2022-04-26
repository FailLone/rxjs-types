import { add } from "../number/add";
import { RenderItem, replaceFrame } from "../render/renderItem";

export type delay<O extends RenderItem[], T extends number> =
{
    [Key in keyof O]: O[Key] extends RenderItem ? replaceFrame<O[Key], add<T, O[Key]['frame']>> : O[Key]
}
