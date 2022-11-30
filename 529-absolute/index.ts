namespace Absolute {
  type Test = -100;
  type Result = Absolute<Test>; // expected to be "100"
  // solution
  type Absolute<T extends number | string | bigint> =
    `${T}` extends `-${infer S}` ? S : `${T}`;
}
