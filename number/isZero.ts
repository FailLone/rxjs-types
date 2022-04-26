import { numberLike } from "./numberLike"
import { from } from "../string/from"

export type isZero<N extends numberLike> = from<N> extends '0' ? true : false;
