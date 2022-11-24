namespace AppendArgument {
  type Fn = (a: number, b: string) => number;

  type Result = AppendArgument<Fn, boolean>;
  // 期望是 (a: number, b: string, x: boolean) => number

  type AppendArgument<F extends Function, T> = F extends (
    ...args: infer A
  ) => infer R
    ? (...args: [...A, T]) => R
    : F;
}
