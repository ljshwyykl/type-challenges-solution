namespace DropChar {
  type Butterfly = DropChar<" b u t t e r f l y ! ", " ">; // 'butterfly!'

  // solution 1
  type DropChar<
    T extends string,
    D extends string
  > = T extends `${infer F}${infer R}`
    ? F extends D
      ? DropChar<R, D>
      : `${F}${DropChar<R, D>}`
    : T;
}
