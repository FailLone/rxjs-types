import { endsWith } from './../string/endsWith';
import { error } from "../common/error";
import { maxNestCount } from "../common/maxNestCount";
import { compare } from "../number/compare";
import { repeat } from "../string/repeat";
import { end } from "./end";
import { leftGroup } from "./leftGroup";
import { oneFrame } from "./oneFrame";
import { rightGroup } from "./rightGroup";
import { from } from '../string/from';

export type frame<T extends number> = compare<T, 10> extends true
    ? from<T> extends `${infer Before}000`
        ? ` ${Before}s `
        : ` ${T}ms `
    : repeat<oneFrame, T>

export type symbols = leftGroup | rightGroup | end | oneFrame