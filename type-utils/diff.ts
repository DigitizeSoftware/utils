export type Diff<T1 extends T2, T2 extends object> = Pick<T1, Exclude<keyof T1, keyof T2>>;