// interface Buffer<T> {
//   buffer: T
//   isClean: () => boolean,
//   isDirty: () => boolean,
//   set: (path: string, value: any) => void
//   get: (path: string) => any
//   rollback: () => T
//   apply: () => T
// }

interface Indexable {
  [prop: string]: any
  [prop: number]: any
}

// Test helper interfaces
interface UpdatePropTestConfig {
  title: string;
  data: Indexable;
  path: string;
  oldValue: any;
  newValue: any;
}

interface AddPropTestConfig {
  title: string;
  data: Indexable;
  path: string;
  newValue: any;
}
