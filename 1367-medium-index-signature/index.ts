namespace RemoveIndexSignature {
  type Foo = {
    [key: string]: any;
    foo(): void;
  };

  type A = RemoveIndexSignature<Foo>; // expected { foo(): void }
  // solution 1
  // An index signature parameter type be either 'string' or 'number'.
  type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K
      ? never
      : number extends K
      ? never
      : K]: T[K];
  };
}
