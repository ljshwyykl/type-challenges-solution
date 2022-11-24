namespace ReplaceAll {
  type replaced = ReplaceAll<"t y p e s", " ", "">; // 期望是 'types'

  // solution
  type ReplaceAll<
    S extends string,
    F extends string,
    T extends string
  > = S extends `${infer S}${F extends "" ? never : F}${infer E}`
    ? `${S}${T}${ReplaceAll<E, F, T>}`
    : S;
}
