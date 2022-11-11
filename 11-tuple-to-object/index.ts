namespace TupleToObject {
  const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

  type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

  // solution
  type TupleToObject<T extends readonly (string | number) []> = {
    [K in T[number]]: T[number];
  };
}
