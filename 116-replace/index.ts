namespace Replace {
  type replaced = Replace<"types are fun!", "fun", "awesome">; // 期望是 'types are awesome!'

  // solution
  type Replace<
    S extends string,
    F extends string,
    T extends string
  > = S extends `${infer S}${F extends "" ? never : F}${infer E}`
    ? `${S}${T}${E}`
    : S;
}
