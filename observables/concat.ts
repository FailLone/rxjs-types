import { concatAll } from "../operators/concatAll";
import { Observable } from "./observable";

export type concat<A extends Observable, B extends Observable>
    = concatAll<[A, B]>