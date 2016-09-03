import { set, get } from 'lodash/fp';

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
    this.object = this.buffer = object;
  }

  isClean() {
    return this.object === this.buffer;
  }

  isDirty() {
    return this.object !== this.buffer;
  }

  rollback() {
    this.buffer = this.object;
    return this.buffer;
  }

  get(path: string): any {
    return get(path, this.buffer);
  }

  set(path: string, newValue: any) {
    this.buffer = set(path, newValue, this.buffer);
  }

  apply() {
    return this.buffer;
  }
}
