import { startsWith } from "../string/startsWith";

export type isError<T extends string> =
    startsWith<T, 'Error'> extends true ? true : false;