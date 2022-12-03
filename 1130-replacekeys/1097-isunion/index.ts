namespace ReplaceKeys {
  type NodeA = {
    type: "A";
    name: string;
    flag: number;
  };

  type NodeB = {
    type: "B";
    id: number;
    flag: number;
  };

  type NodeC = {
    type: "C";
    name: string;
    flag: number;
  };

  type Nodes = NodeA | NodeB | NodeC;

  type ReplacedNodes = ReplaceKeys<
    Nodes,
    "name" | "flag",
    { name: number; flag: string }
  >; // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

  type ReplacedNotExistKeys = ReplaceKeys<Nodes, "name", { aa: number }>; // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never

  // solution 1
  // type ReplaceKeys<T, U, Y> = T extends any
  //   ? {
  //       [K in keyof T]: K extends U ? (K extends keyof Y ? Y[K] : never) : T[K];
  //     }
  //   : never;

  // solution 2
  type ReplaceKeys<Obj, Keys, Tar> = Obj extends Obj
    ? {
        [Key in keyof Obj]: Key extends Keys
          ? Key extends keyof Tar
            ? Tar[Key]
            : never
          : Obj[Key];
      }
    : Obj;
}
