import { from } from "../array/from";
import { pop } from "../array/pop";
import { or } from "../common/or";
import { isEqual } from "./isEqual";
import { isZero } from "./isZero";

export type compare<
    A extends number,
    B extends number,
    Helper1 extends unknown[] = from<A>,
    Helper2 extends unknown[] = from<B>
> = isEqual<A, B> extends true
    ? false
    : or<isZero<Helper1['length']>, isZero<Helper2['length']>> extends true
        ? isZero<Helper1['length']> extends true
            ? false
            : true
        : compare<pop<Helper1>['length'], pop<Helper2>['length']>
