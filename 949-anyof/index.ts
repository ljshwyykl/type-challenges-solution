namespace AnyOf {
  type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
  type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.

  // solution

  type AnyOf<T extends unknown[]> = T extends [infer F, ...infer R]
    ? F extends false | 0 | "" | [] | { [P in PropertyKey]: never }
      ? AnyOf<R>
      : true
    : false;
}

