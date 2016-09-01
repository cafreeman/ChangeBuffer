import * as _ from 'lodash/fp';

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
    this.buffer = _.cloneDeep(object);
  }

  isClean() {
    return _.isEqual(this.object, this.buffer);
  }

  isDirty() {
    return _.negate(_.isEqual)(this.object, this.buffer);
  }

  rollback() {
    _.set('buffer', this.object, this);
    this.buffer = _.cloneDeep(this.object);
    return this.buffer;
  }

  get(path: string): any {
    return _.get(path, this.buffer);
  }

  set(path: string, newValue: any) {
    let newObject = _.set(path, newValue, this.buffer);
    this.buffer = newObject;
  }

  apply() {
    return _.assign(this.object, this.buffer);
  }
}
