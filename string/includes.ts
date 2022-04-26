export type includes<
  S1 extends string,
  S2 extends string
> = S1 extends `${infer Left}${S2}${infer Right}` ? true : false