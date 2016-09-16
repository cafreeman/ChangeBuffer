import { test } from 'ava';
import { chris, books, favoriteBooks } from './fixtures/chris';
import { makeSetPropertyTest } from './macros/make-set-property-test';

const rootValueTest = {
  title: 'setting a root-level value',
  data: chris,
  path: 'firstName',
  oldValue: 'Chris',
  newValue: 'Christopher'
};

makeSetPropertyTest(rootValueTest)(test);

const nestedValueTest = {
  title: 'setting a nested value',
  data: chris,
  path: 'favoriteBooks.0.title',
  oldValue: 'The Sun Also Rises',
  newValue: 'A Moveable Feast'
};

makeSetPropertyTest(nestedValueTest)(test);

const nestedObjectTest = {
  title: 'setting a nested object',
  data: chris,
  path: 'favoriteBooks.0',
  oldValue: books.sunAlsoRises,
  newValue: books.theTrial
};

makeSetPropertyTest(nestedObjectTest)(test);

const arrayOfObjectsTest = {
  title: 'setting an array of objects',
  data: chris,
  path: 'favoriteBooks',
  oldValue: favoriteBooks,
  newValue: [books.theTrial, books.tropicOfCancer]
};

makeSetPropertyTest(arrayOfObjectsTest)(test);
