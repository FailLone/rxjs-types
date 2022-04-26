import { from } from "../array/from";

export type add<T extends number, R extends number> = [...from<T>, ...from<R>]['length'] extends number ? [...from<T>, ...from<R>]['length']  : number
