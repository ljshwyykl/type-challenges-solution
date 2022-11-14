namespace MyAwaited {
  type ExampleType = Promise<string>;

  type Result = MyAwaited<ExampleType>; // string
  type Result1 = MyAwaited<Promise<ExampleType>>; //

  // solution

  type Thenable<T> = {
    then: (onfulfilled: (arg: T) => unknown) => unknown;
  };

  type MyAwaited<T extends Promise<any> | Thenable<any>> = T extends Promise<
    infer Inner
  >
    ? Inner extends Promise<any>
      ? MyAwaited<Inner>
      : Inner
    : T extends Thenable<infer U>
    ? U
    : never;

  //https://blog.csdn.net/weixin_42309926/article/details/108525111
}
