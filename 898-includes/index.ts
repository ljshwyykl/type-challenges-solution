namespace Includes {
  type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

  // solution
  // github.com/type-challenges/type-challenges/issues/1568#issue-906163748
  type IsEqual<T, U> = (<G>() => G extends T ? 1 : 2) extends <
    G
  >() => G extends U ? 1 : 2
    ? true
    : false;

  type Includes<T extends readonly unknown[], U> = T extends [
    infer First,
    ...infer Rest
  ]
    ? IsEqual<First, U> extends true
      ? true
      : Includes<Rest, U>
    : false;
}
