// import * as _ from 'lodash/fp';
import {
  cloneDeep,
  isEqual,
  negate,
  get,
  set,
  assign
} from 'lodash/fp';

interface Buffer {
  buffer: {}
  isClean: () => boolean,
  isDirty: () => boolean,
  set: (path: string, value: any) => void
  get: (path: string) => any
  rollback: () => {}
  apply: () => {}
}

export class ChangeBuffer implements Buffer {
  private object;
  public buffer: {};
  constructor(object) {
    this.object = object;
    this.buffer = cloneDeep(object);
  }

  isClean() {
    return isEqual(this.object, this.buffer);
  }

  isDirty() {
    return negate(isEqual)(this.object, this.buffer);
  }

  rollback() {
    this.buffer = cloneDeep(this.object);
    return this.buffer;
  }

  get(path: string): any {
    return get(path, this.buffer);
  }

  set(path: string, newValue: any) {
    this.buffer = set(path, newValue, this.buffer);
  }

  apply() {
    return assign(this.object, this.buffer);
  }
}
