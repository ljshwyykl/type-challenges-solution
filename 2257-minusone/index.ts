namespace MinusOne {
  type Zero = MinusOne<1>; // 0
  type FiftyFour = MinusOne<55>; // 54

  // solution 1
  type MinusOne<T extends number, A extends unknown[] = []> = [
    ...A,
    1
  ]["length"] extends T
    ? A["length"]
    : MinusOne<T, [...A, 1]>;
}
