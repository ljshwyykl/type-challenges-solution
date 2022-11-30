namespace Diff {
  type Foo = {
    a: string;
    b: number;
  };
  type Bar = {
    a: string;
    c: boolean;
  };

  type Result1 = Diff<Foo, Bar>; // { b: number, c: boolean }
  type Result2 = Diff<Bar, Foo>; // { b: number, c: boolean }

  // solution

  type Diff<O, O1> = {
    [P in
      | Exclude<keyof O1, keyof O>
      | Exclude<keyof O, keyof O1>]: P extends keyof O
      ? O[P]
      : P extends keyof O1
      ? O1[P]
      : never;
  };
}
