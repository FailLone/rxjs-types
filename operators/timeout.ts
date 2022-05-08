import { compare } from './../string/compare';
import { getRenderItem, RenderItem } from '../render/renderItem';
import { Observable, getObservable } from './../observables/observable';

export type timeout<T extends Observable, N extends number> =
    T['values'][0] extends RenderItem
        ? compare<T['values'][0]['frame'], `${N}`> extends true
            ? getTimeout<N>
            : T
        : getTimeout<N>

type getTimeout<N extends number> = getObservable<[getRenderItem<'', `${N}`>], false, true>