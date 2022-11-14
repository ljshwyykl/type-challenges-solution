namespace Concat {
  type Result = Concat<[1], [2]>; // expected to be [1, 2]

  // solution

  // type Concat<T extends any[], U extends any[]> = [...T, ...U];

  type Concat<T extends Array<unknown>, U extends Array<unknown>> = [
    ...T,
    ...U
  ];
}
