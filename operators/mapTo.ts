import { stringLike } from '../string/stringLike';
import { RenderItem, replaceValue } from '../render/renderItem';

export type mapTo<O extends RenderItem[], T extends stringLike> =
    {
        [Key in keyof O]: O[Key] extends RenderItem ? replaceValue<O[Key], T> : O[Key]
    }