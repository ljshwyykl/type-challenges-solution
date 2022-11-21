namespace Capitalize {
  type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

  // solution

  // 你的答案
type Capitalize<T extends string> = T extends `${infer First}${infer F}` ? `${Uppercase<First>}${F}` : T
}
