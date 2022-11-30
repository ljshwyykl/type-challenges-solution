namespace Merge {
  type foo = {
    name: string;
    age: string;
  };

  type coo = {
    age: number;
    sex: string;
  };

  type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
  type Result1 = Merge1<foo, coo>;

  // solution1
  type Merge<T extends object, F extends object> = {
    [K in keyof T | keyof F]: K extends keyof F
      ? F[K]
      : K extends keyof T
      ? T[K]
      : never;
  };

  // solution2
  type Merge1<T extends object, F extends object, M = T & F> = {
    [K in keyof M]: K extends keyof F ? F[K] : K extends keyof T ? T[K] : never;
  };
}
