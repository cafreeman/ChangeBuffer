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
