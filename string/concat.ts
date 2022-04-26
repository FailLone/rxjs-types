import { stringLike } from "./stringLike";

export type concat<S1 extends stringLike, S2 extends stringLike> = `${S1}${S2}`