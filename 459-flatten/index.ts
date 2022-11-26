namespace Flatten {
  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]

  // 本题答案
  type Flatten<T extends unknown[], Result extends unknown[] = []> = T extends [
    infer Start,
    ...infer Rest
  ]
    ? Start extends unknown[]
      ? Flatten<Rest, [...Result, ...Flatten<Start>]>
      : Flatten<Rest, [...Result, Start]>
    : Result;
}
