namespace AppendToObject {
  type Test = { id: "1" };
  type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }

  // solution
  type AppendToObject<
    T extends { [key: string]: unknown },
    U extends string | number,
    V
  > = T & { [P in U]: V } extends infer R ? { [P in keyof R]: R[P] } : never;
}
