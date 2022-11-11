namespace Pick {
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = MyPick<Todo, "title" | "completed">;

  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
  };

  // solution
  type MyPick<T extends { [kes: string]: any }, U extends keyof T> = {
    [K in U]: T[U];
  };
}
