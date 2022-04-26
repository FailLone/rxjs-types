import { compare } from "../number/compare"
import { from } from "../string/from"
import { length } from "../string/length"
import { stringLike } from "../string/stringLike"
import { leftGroup } from "./leftGroup"
import { rightGroup } from "./rightGroup"

export type unGroup<T extends string> = T extends `${leftGroup}${infer R}${rightGroup}` ? R : T

export type group<T extends stringLike> = T extends '' ? '' : `${leftGroup}${T}${rightGroup}`
