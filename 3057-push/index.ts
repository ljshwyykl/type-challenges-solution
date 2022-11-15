namespace Push {
  type Result = Push<[1, 2], "3">; // [1, 2, '3']

  // solution

  type Push<T extends any[], U> = [...T, U];
}
