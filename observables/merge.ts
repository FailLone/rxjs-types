import { and } from './../common/and';
import { add } from "../number/add";
import { compare } from "../string/compare";
import { RenderItem } from "../render/renderItem";
import { bigReduce } from '../number/bigReduce';
import { bigAdd } from '../number/bigAdd';
import { or } from '../common/or'
import { Observable } from './observable'
import { maxNestCount } from "../common/maxNestCount";
import { push } from "../array/push";

type addTimestamp<T extends RenderItem[], Cur extends string = '0', Res extends RenderItem[] = []> =
		Res['length'] extends maxNestCount
			?	Res
			:	T extends [infer Item, ...infer Rest]
					? Item extends RenderItem
							? bigAdd<Item['frame'], Cur> extends infer Timestamp
									? addTimestamp<Rest extends RenderItem[] ? Rest : [], Timestamp & string, push<Res, {
										  frame: Timestamp & string,
											value: Item['value']
									}>>
									: never
							: never
					: Res

type mergeAllByTimestamp<
	A extends Observable,
	B extends Observable,
	ValueA extends RenderItem[] = addTimestamp<A['values']>,
	ValueB extends RenderItem[] = addTimestamp<B['values']>,
	Res extends RenderItem[] = []
> =
		ValueA extends [infer ItemA, ...infer RestA]
			? ValueB extends [infer ItemB, ...infer RestB]
					? compare<(ItemA & RenderItem)['frame'], (ItemB & RenderItem)['frame']> extends true
						? mergeAllByTimestamp<A, B, ValueA, RestB extends RenderItem[] ? RestB : [], push<Res, ItemB & RenderItem>>
						: mergeAllByTimestamp<A, B, RestA extends RenderItem[] ? RestA : [], ValueB, push<Res, ItemA & RenderItem>>
					: B['isError'] extends true
							? Res
							: [...Res, ...ValueA]
			: A['isError'] extends true
				?	Res
				: [...Res, ...ValueB]

type reduce<A extends RenderItem, B extends RenderItem>
    = A['frame'] extends B['frame']
        ? { value: B['value'], frame: '0' }
        : {
                value: B['value'],
                frame: bigReduce<B['frame'], A['frame']>
          }

type mergeValues<T extends RenderItem[], Seed extends number = 0, Prev extends RenderItem | void = void>
    = Seed extends maxNestCount
        ? []
        : T extends [infer Item, ...infer RestA]
					? [
							Prev extends void ? Item : reduce<Prev & RenderItem, Item & RenderItem>,
							...mergeValues<RestA extends RenderItem[] ? RestA : [], add<Seed, 1>, Item & RenderItem>
						]
					: []


export type merge<
    A extends Observable,
    B extends Observable,
>
    = {
        isError: or<A['isError'], B['isError']>,
        isEnd: and<A['isEnd'], B['isEnd']>,
        values: mergeValues<
					mergeAllByTimestamp<
						A,
						B
					>
				>
    }