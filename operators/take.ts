import { push } from './../array/push';
import { isEqual } from '../number/isEqual';
import { add } from '../number/add';
import { RenderItem } from '../render/renderItem';
import { Observable, replaceIsEnd, replaceIsInfinite, replaceValue } from '../observables/observable';
import { compare } from '../number/compare';
import { maxNestCount } from '../common/maxNestCount';
import { or } from '../common/or';

export type take<
    S extends Observable,
    Count extends number,
    Res extends RenderItem[] = takeHelper<S['values'], Count>,
    Equal extends boolean = or<compare<Res['length'], maxNestCount>, Res['length'] extends maxNestCount ? true : false>
> =
    replaceIsEnd<
        replaceIsInfinite<
            replaceValue<S, Res>,
            Equal
        >,
        Equal extends true ? false : true
    >

type takeHelper<S extends RenderItem[], Count extends number, Res extends RenderItem[] = [], Seed extends number = 0> =
    isEqual<Count, Seed> extends true
        ? Res
        : S extends [infer Item, ...infer Rest]
            ? takeHelper<Rest extends RenderItem[] ? Rest : [], Count, push<Res, Item & RenderItem>, add<Seed, 1>>
            : Res