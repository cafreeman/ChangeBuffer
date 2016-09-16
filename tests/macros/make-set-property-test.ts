import { ChangeBuffer, Indexable } from '../../src/index';
import { get } from 'lodash/fp';

export interface UpdatePropTestConfig {
  title: string;
  data: Indexable;
  path: string;
  oldValue: any;
  newValue: any;
}

export function makeSetPropertyTest({ title, data, path, oldValue, newValue }: UpdatePropTestConfig) {
  return (test) => {
    let buffer: ChangeBuffer<Indexable>;

    test.before(title, t => {
      buffer = new ChangeBuffer(data);
      buffer.set(path, newValue);
    });

    test('it reflects the change value', t => {
      t.is(buffer.get(path), newValue);
    });

    test('does not change the underlying object', t => {
      t.is(get(path, data), oldValue);
    });

    let newThing;

    test.before('applying the buffer', t => {
      newThing = buffer.apply();
    });

    test('returns a new object', t => {
      t.notDeepEqual(newThing, data);
      t.not(newThing, data);
    });

    test('reflects the correct changes', t => {
      t.is(get(path, newThing), newValue);
    });

    test('does not mutate the original object', t => {
      t.is(get(path, data), oldValue);
    });
  }
}
