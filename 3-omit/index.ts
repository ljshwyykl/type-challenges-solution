namespace Omit {
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = MyOmit<Todo, "description" | "title">;

  type TodoPreview2 = MyOmit2<Todo, "description" | "title">;

  const todo: TodoPreview = {
    completed: false,
  };

  // solution 1
  type MyOmit<T extends { [key: string]: any }, K extends keyof T> = {
    [U in keyof T as U extends K ? never : U]: T[U];
  };

  // solution 2

  type MyOmit2<T extends { [key: string]: any }, K extends keyof T> = {
    [U in Exclude<keyof T, K>]: T[U];
  };
}
