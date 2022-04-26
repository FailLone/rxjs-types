import { includes } from "./includes";
import { replace } from "./replace";

export type replaceAll<
  S extends string,
  MatchStr extends string,
  ReplaceStr extends string
> = includes<S, MatchStr> extends true
  ? replaceAll<replace<S, MatchStr, ReplaceStr>, MatchStr, ReplaceStr>
  : S