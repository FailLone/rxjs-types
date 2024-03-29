import { stringLike } from "../string/stringLike";
import { getObservable, Observable, replaceIsEnd, replaceIsError } from "./observable";

export type throwError<T extends Observable> = getObservable<[], false, true>