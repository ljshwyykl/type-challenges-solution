namespace PickByType {
  type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }

  // solution 1
  type PickByType<T, U> = {
    [K in keyof T as T[K] extends U ? K : never]: T[K];
  };
}
