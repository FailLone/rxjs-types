import { Observable, replaceValue } from "../observables/observable";

export type catchError<T extends Observable, P extends Observable> =
    T['isError'] extends true
        ? replaceValue<P, [...T['values'], ...P['values']]>
        : T