namespace Trim {
  type trimed = Trim<"  Hello World  ">; // expected to be 'Hello World'

  // solution

  type Separator = " " | "/t" | "/n";

  type TrimLeft<T extends string> = T extends `${Separator}${infer R}`
    ? TrimLeft<R>
    : T;
  type TrimRight<T extends string> = T extends `${infer R}${Separator}`
    ? TrimRight<R>
    : T;

  type Trim<T extends string> = TrimLeft<TrimRight<T>>;
}
