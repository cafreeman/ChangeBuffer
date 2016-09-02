import { expect } from 'chai';
import { chris, sunAlsoRises } from './fixtures/chris';
import { makeGetTest } from './helpers/make-get-test';

let objectTestSpecs = [
  {
    title: 'getting a root-level value',
    testData: chris,
    testPath: 'firstName',
    testValue: 'Chris'
  },
  {
    title: 'getting a nested property',
    testData: chris,
    testPath: 'favorites.drink',
    testValue: 'Old-Fashioned'
  },
  {
    title: 'getting an element from an array property',
    testData: chris,
    testPath: 'favoriteBooks.0',
    testValue: sunAlsoRises
  },
  {
    title: 'getting a nested value from an array element',
    testData: chris,
    testPath: 'favoriteBooks.0.title',
    testValue: sunAlsoRises.title
  },
];

describe('get() with an object', () => {
  objectTestSpecs.forEach(spec => makeGetTest(spec)(expect));
});

const arrayTestSpecs = [
  {
    title: 'getting an array element with a string index',
    testData: [1, 2, 3, 4],
    testPath: '1',
    testValue: 2
  },
  {
    title: 'getting an array element with a numeric index',
    testData: [1, 2, 3, 4],
    testPath: 1,
    testValue: 2
  },
  {
    title: 'getting an object property from within an array',
    testData: [
      {
        a: 1,
        b: 2
      }
    ],
    testPath: '0.a',
    testValue: 1
  }
];

describe('get() with an array', () => {
  arrayTestSpecs.forEach(spec => makeGetTest(spec)(expect));
})

const missingPropTestSpecs = [
  {
    title: 'getting a non-existent root-level value',
    testData: chris,
    testPath: 'nope',
    testValue: undefined
  },
  {
    title: 'getting a non-existent nested value',
    testData: chris,
    testPath: 'favorites.food',
    testValue: undefined
  },
  {
    title: 'getting a non-existent array element',
    testData: [1, 2, 3],
    testPath: '3',
    testValue: undefined
  },
  {
    title: 'getting a non-existent nested array value',
    testData: chris,
    testPath: 'favoriteBooks.2',
    testValue: undefined
  },
  {
    title: 'getting a completely invalid path',
    testData: chris,
    testPath: 'favoriteThings.stuff',
    testValue: undefined
  }
];

describe('get() with missing properties', () => {
  missingPropTestSpecs.forEach(spec => makeGetTest(spec)(expect));
});
