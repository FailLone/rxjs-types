import { push } from "../array/push";
import { UnionToIntersection } from "./unionToIntersection";

type Last<T> = UnionToIntersection<T extends any ? () => T : never> extends () => (infer R) ? R : never

export type unionToTuple<T, L = Last<T>, N = [T] extends [never] ? true : false> =
    true extends N ? [] : push<unionToTuple<Exclude<T, L>>, L>

