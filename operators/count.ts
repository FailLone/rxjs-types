import { mergeFrame } from './reduce';
import { Observable, replaceValue } from "../observables/observable";
import { stringLike } from "../string/stringLike";
import { filterHelper } from './filter';

export type count<T extends Observable, Match extends stringLike[] | void = void> =
    T['isEnd'] extends true
        ? Match extends stringLike[]
            ? replaceValue<T, [{ value: filterHelper<T['values'], Match>['length'], frame: mergeFrame<T['values'], '0', any>[0]['frame'] }]>
            : replaceValue<T, [{ value: T['values']['length'], frame: mergeFrame<T['values'], '0', any>[0]['frame'] }]>
        : T
