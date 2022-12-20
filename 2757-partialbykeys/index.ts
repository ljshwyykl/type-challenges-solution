namespace PartialByKeys {
  interface User {
    name: string;
    age: number;
    address: string;
  }

  type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }

  type Flatten<T> = {
    [key in keyof T]: T[key];
  };

  type PartialByKeys<T, K extends keyof T = keyof T> = Flatten<
    Omit<T, K> & {
      [P in K]?: T[P];
    }
  >;
}
