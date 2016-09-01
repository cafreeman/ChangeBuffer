import { expect } from 'chai';
import { chris, sunAlsoRises, Book, favoriteBooks } from './fixtures/chris';
import { makeSetPropertyTest } from './helpers/make-set-property-test';

describe('Updating existing properties on a ChangeBuffer', () => {
  let rootValueTest = {
    testTitle: 'setting a root-level value',
    startingObject: chris,
    path: 'firstName',
    oldValue: 'Chris',
    newValue: 'Christopher'
  };

  makeSetPropertyTest(rootValueTest)(expect);

  let nestedValueTest = {
    testTitle: 'setting a nested value',
    startingObject: chris,
    path: 'favoriteBooks[0].title',
    oldValue: 'The Sun Also Rises',
    newValue: 'A Moveable Feast'
  };

  makeSetPropertyTest(nestedValueTest)(expect);

  let nestedObjectTest = {
    testTitle: 'setting a nested object',
    startingObject: chris,
    path: 'favoriteBooks[0]',
    oldValue: sunAlsoRises,
    newValue: new Book('The Trial', 'Franz Kafka')
  };

  makeSetPropertyTest(nestedObjectTest)(expect);

  let arrayOfObjectsTest = {
    testTitle: 'setting an array of objects',
    startingObject: chris,
    path: 'favoriteBooks',
    oldValue: favoriteBooks,
    newValue: [new Book('The Trial', 'Franz Kafka'), new Book('Tropic of Canceer', 'Henry Miller')]
  };

  makeSetPropertyTest(arrayOfObjectsTest)(expect);
});
