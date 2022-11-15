namespace Unshift {
  type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]

  // solution

  type Unshift<T extends Array<unknown>, U> = [U, ...T];
}
