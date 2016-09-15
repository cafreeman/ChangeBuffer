import { test } from 'ava';
import { chris } from './fixtures/chris';
import { ChangeBuffer, Indexable } from '../src/index';

let buffer: ChangeBuffer<Indexable>;

test.before('rollback on ChangeBuffer', t => {
  buffer = new ChangeBuffer(chris);
})

test('is clean', t => {
  t.true(buffer.isClean());
  t.false(buffer.isDirty());
});

test('making some changes', t => {
  buffer.set('firstName', 'Christopher');
  buffer.set('thing1.thing2', 'this is thing2');

  t.is(buffer.get('firstName'), 'Christopher', 'should be the new value');
  t.is(buffer.get('thing1.thing2'), 'this is thing2', 'should be the new value');

  t.false(buffer.isClean());
  t.true(buffer.isDirty());
});

test('rolling back the changes', t => {
  buffer.rollback();

  t.is(buffer.get('thing1.thing2'), undefined);
  t.is(buffer.get('firstName'), 'Chris');

  t.true(buffer.isClean());
  t.false(buffer.isDirty());
});
