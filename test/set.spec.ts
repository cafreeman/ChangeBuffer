import { expect } from 'chai';
import { chris, books } from './fixtures/chris';
import { makeSetTest } from './helpers/make-set-test';

import { set } from '../src/utils/set';

const setTestSpecs: Array<UpdatePropTestConfig> = [
  {
    title: 'setting a root-level property',
    data: chris,
    path: 'firstName',
    oldValue: 'Chris',
    newValue: 'Christopher'
  },
  {
    title: 'setting a nested property',
    data: chris,
    path: 'favorites.drink',
    oldValue: 'Old-Fashioned',
    newValue: 'Bourbon'
  },
  {
    title: 'setting an array element',
    data: chris,
    path: 'favoriteBooks.0',
    oldValue: books.sunAlsoRises,
    newValue: books.tropicOfCancer
  },
  {
    title: 'setting a nested property in an array element',
    data: chris,
    path: 'favoriteBooks.0.title',
    oldValue: 'The Sun Also Rises',
    newValue: 'A Moveable Feast'
  },
]

describe('set()', () => {
  setTestSpecs.forEach(spec => makeSetTest(spec)(expect));
});
