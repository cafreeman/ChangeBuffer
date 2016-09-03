import { expect } from 'chai';
import { chris, sunAlsoRises, Book, favoriteBooks } from './fixtures/chris';
import { makeSetPropertyTest } from './helpers/make-set-property-test';

describe('Updating existing properties on a ChangeBuffer', () => {
  let rootValueTest = {
    title: 'setting a root-level value',
    data: chris,
    path: 'firstName',
    oldValue: 'Chris',
    newValue: 'Christopher'
  };

  makeSetPropertyTest(rootValueTest)(expect);

  let nestedValueTest = {
    title: 'setting a nested value',
    data: chris,
    path: 'favoriteBooks.0.title',
    oldValue: 'The Sun Also Rises',
    newValue: 'A Moveable Feast'
  };

  makeSetPropertyTest(nestedValueTest)(expect);

  let nestedObjectTest = {
    title: 'setting a nested object',
    data: chris,
    path: 'favoriteBooks.0',
    oldValue: sunAlsoRises,
    newValue: new Book('The Trial', 'Franz Kafka')
  };

  makeSetPropertyTest(nestedObjectTest)(expect);

  let arrayOfObjectsTest = {
    title: 'setting an array of objects',
    data: chris,
    path: 'favoriteBooks',
    oldValue: favoriteBooks,
    newValue: [new Book('The Trial', 'Franz Kafka'), new Book('Tropic of Canceer', 'Henry Miller')]
  };

  makeSetPropertyTest(arrayOfObjectsTest)(expect);
});
