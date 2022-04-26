import { toUnion } from "./toUnion";

export type includes<T extends unknown[], V> = V extends toUnion<T> ? true : false