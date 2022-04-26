import { stringLike } from "./stringLike";

export type from<T extends stringLike> = `${T}`