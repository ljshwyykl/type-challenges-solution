namespace TrimLeft {
  type trimed = TrimLeft<"  Hello World  ">; // 应推导出 'Hello World  '

  // solution
  type TrimLeft<T extends string> = T extends `${" " | "/t" | "/n"} ${infer R}`
    ? TrimLeft<R>
    : T;
}
