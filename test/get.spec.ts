import { expect } from 'chai';
import { chris, books} from './fixtures/chris';
import { makeGetTest } from './helpers/make-get-test';

let objectTestSpecs: Array<GetPropTestConfig> = [
  {
    title: 'getting a root-level value',
    data: chris,
    path: 'firstName',
    testValue: 'Chris'
  },
  {
    title: 'getting a nested property',
    data: chris,
    path: 'favorites.drink',
    testValue: 'Old-Fashioned'
  },
  {
    title: 'getting an element from an array property',
    data: chris,
    path: 'favoriteBooks.0',
    testValue: books.sunAlsoRises
  },
  {
    title: 'getting a nested value from an array element',
    data: chris,
    path: 'favoriteBooks.0.title',
    testValue: books.sunAlsoRises.title
  },
];

describe('get() with an object', () => {
  objectTestSpecs.forEach(spec => makeGetTest(spec)(expect));
});

const arrayTestSpecs: Array<GetPropTestConfig> = [
  {
    title: 'getting an array element with a string index',
    data: [1, 2, 3, 4],
    path: '1',
    testValue: 2
  },
  {
    title: 'getting an array element with a numeric index',
    data: [1, 2, 3, 4],
    path: 1,
    testValue: 2
  },
  {
    title: 'getting an object property from within an array',
    data: [
      {
        a: 1,
        b: 2
      }
    ],
    path: '0.a',
    testValue: 1
  }
];

describe('get() with an array', () => {
  arrayTestSpecs.forEach(spec => makeGetTest(spec)(expect));
})

const missingPropTestSpecs: Array<GetPropTestConfig> = [
  {
    title: 'getting a non-existent root-level value',
    data: chris,
    path: 'nope',
    testValue: undefined
  },
  {
    title: 'getting a non-existent nested value',
    data: chris,
    path: 'favorites.food',
    testValue: undefined
  },
  {
    title: 'getting a non-existent array element',
    data: [1, 2, 3],
    path: '3',
    testValue: undefined
  },
  {
    title: 'getting a non-existent nested array value',
    data: chris,
    path: 'favoriteBooks.2',
    testValue: undefined
  },
  {
    title: 'getting a completely invalid path',
    data: chris,
    path: 'favoriteThings.stuff',
    testValue: undefined
  }
];

describe('get() with missing properties', () => {
  missingPropTestSpecs.forEach(spec => makeGetTest(spec)(expect));
});
