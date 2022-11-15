namespace MyParameters {
  const foo = (arg1: string, arg2: number): void => {};

  type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

  // solution

  type MyParameters<T extends (...arg: any[]) => any> = T extends (
    ...arg: infer P
  ) => any
    ? P
    : never;
}
