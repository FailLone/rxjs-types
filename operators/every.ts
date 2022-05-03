import { stringLike } from './../string/stringLike';
import { getObservable, Observable, replaceValue } from "../observables/observable";
import { RenderItem } from "../render/renderItem";
import { includes } from '../array/include';
import { mergeFrame } from './reduce';

export type every<T extends Observable, Match extends stringLike[]> =
    T['isEnd'] extends true
        ? replaceValue<T, mergeFrame<everyHelper<T['values'], Match>>>
        : getObservable<[], false>

type everyHelper<T extends RenderItem[], Match extends stringLike[]> =
    T extends [infer Item, ...infer Rest]
        ? includes<Match, (Item & RenderItem)['value']> extends true
            ? [{
                value: '',
                frame: (Item & RenderItem)['frame']
            }, ...everyHelper<Rest extends RenderItem[] ? Rest : [], Match>]
            : [{
                value: false,
                frame: (Item & RenderItem)['frame']
            }]
        : [{
            value: true,
            frame: '0'
        }]