export type from<T extends number, R extends unknown[] = []> = R['length'] extends T ? R : from<T, [...R, unknown]>
