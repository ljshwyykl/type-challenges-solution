namespace Chainable {
  declare const config: Chainable;

  const result = config
    .option("foo", 123)
    .option("name", "type-challenges")
    .option("bar", { value: "Hello World" })
    .get();

  // 期望 result 的类型是：
  interface Result {
    foo: number;
    name: string;
    bar: {
      value: string;
    };
  }

  // solution 1
  // type Chainable<T = {}> = {
  //   option<K extends string, V>(
  //     key: K extends keyof T ? never : K,
  //     value: V
  //   ): Chainable<Omit<T, K> & { [Key in K]: V }>;
  //   get(): T;
  // };

  // solution 2
  type Chainable<T = {}> = {
    option<K extends string, V>(
      key: K extends keyof T ? (V extends T[K] ? never : K) : K,
      value: V
    ): Chainable<{ [key in K]: V } & Omit<T, K>>;
    get(): T;
  };
}
