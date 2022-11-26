namespace LengthOfString {
  type l = LengthOfString<"abc">; // 3
  // solution
  // your answers
  type LengthOfString<
    S extends string,
    A extends string[] = []
  > = S extends `${infer F}${infer Rest}`
    ? LengthOfString<Rest, [...A, F]>
    : A["length"];
}
