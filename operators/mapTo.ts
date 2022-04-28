import { stringLike } from '../string/stringLike';
import { RenderItem, replaceValue } from '../render/renderItem';

export type mapTo<O extends RenderItem[], T extends stringLike> =
    {
        [Key in keyof O]: replaceValue<O[Key] & RenderItem, T>
    }