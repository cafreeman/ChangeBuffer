import { ChangeBuffer, Indexable } from '../../src/index';
import { get } from 'lodash/fp';

export interface AddPropTestConfig {
  title: string;
  data: Indexable;
  path: string;
  newValue: any;
}

export function makeAddPropertyTest({ title, data, path, newValue }) {
  return (test) => {
    let buffer: ChangeBuffer<Indexable>;
    test.before(t => {
      buffer = new ChangeBuffer(data);
      buffer.set(path, newValue);
    });

    test('adds the new property to the buffer', t => {
      t.is(buffer.get(path), newValue);
    });

    test('does not add the property to the original object', t => {
      t.is(get(path, data), undefined);
    });

    let newThing;

    test.before('applying the buffer', t => {
      newThing = buffer.apply();
    })

    test('produces a new object with the added property', t => {
      t.is(get(path, newThing), newValue);
    });

    test('does not change the original object', t => {
      t.is(get(path, data), undefined)
    });
  }
}
