namespace MyReadonly2 {
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  const todo: MyReadonly2<Todo, "title" | "description"> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  };

  todo.title = "Hello"; // Error: cannot reassign a readonly property
  todo.description = "barFoo"; // Error: cannot reassign a readonly property
  todo.completed = true; // OK

  // solution
  type MyReadonly2<T extends { [key: string]: any }, K extends keyof T> = {
    [R in Exclude<keyof T, K>]: T[R];
  } & {
    readonly [P in K]: T[P];
  };
}
