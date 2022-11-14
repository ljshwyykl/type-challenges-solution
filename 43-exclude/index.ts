namespace MyExclude {
  type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

  // solution
  type MyExclude<T, U> = T extends U ? never : T;
}
