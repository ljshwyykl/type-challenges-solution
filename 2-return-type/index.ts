namespace MyReturnType {
  const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
  };

  type a = MyReturnType<typeof fn>; // 应推导出 "1 | 2"

  // solution

  type MyReturnType<T extends (...arg: any[]) => any> = T extends () => infer P
    ? P
    : never;
}
