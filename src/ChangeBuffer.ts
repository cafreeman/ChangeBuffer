import * as _ from 'lodash/fp';

interface IChangeBuffer {
  buffer: {}
  changes: any[],
  set: (path: string, value: any) => void
  get: (path: string) => any
  apply: () => {}
}

export class ChangeBuffer implements IChangeBuffer {
  private object;
  public buffer: {};
  public changes : any[];
  constructor(object) {

    this.buffer = _.cloneDeep(object);
    this.changes = [];
  }

  get(path: string): any {
    return _.get(path, this.buffer);
  }

  set(path: string, newValue: any) {
    let newObject = _.set(path, newValue, this.buffer);
    this.buffer = newObject;
  }

  apply() {
    return _.assign(this.buffer, this.object);
  }
}
