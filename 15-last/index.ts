namespace Last {
  type arr1 = ["a", "b", "c"];
  type arr2 = [3, 2, 1];

  type tail1 = Last<arr1>; // expected to be 'c'
  type tail2 = Last2<arr2>; // expected to be 1

  // solution 1
  type Last<T extends Array<unknown>> = T extends [infer First, ...infer Rest]
    ? Rest extends []
      ? First
      : Last<Rest>
    : never;

  // solution 2
  type Last2<T extends Array<unknown>> = T extends [...infer _first, infer Last]
    ? Last
    : never;
}
