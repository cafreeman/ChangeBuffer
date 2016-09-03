import { expect } from 'chai';
import { chris } from './fixtures/chris';
import { makeAddPropertyTest } from './helpers/make-add-property-test';

describe('Adding new properties to a ChangeBuffer', () => {
  const addRootValueConfig = {
    title: 'adding a root-level value',
    data: chris,
    path: 'newProp',
    newValue: 'this is a new value'
  };

  makeAddPropertyTest(addRootValueConfig)(expect);

  const addNestedValueConfig = {
    title: 'add a deeply-nested value',
    data: chris,
    path: 'level1.level2.level3',
    newValue: 'this is the new value nested 3 levels deep'
  };

  makeAddPropertyTest(addNestedValueConfig)(expect);

  const addNestedObjectConfig = {
    title: 'add a deeply-nested object',
    data: chris,
    path: 'favorites.movie',
    newValue: { title: 'Apocalypse Now', director: 'Francis Ford Coppola'}
  };

  makeAddPropertyTest(addNestedObjectConfig)(expect);

  const addNestedArrayConfig = {
    title: 'add a deeply-nested array',
    data: chris,
    path: 'details.cats',
    newValue: [
      { name: 'Hitch', color: 'Black' },
      { name: 'Dre', color: 'White and Grey' },
      { name: 'Eazy', color: 'Brown and Black' },
      { name: 'Arya', color: 'Grey and Black' }
    ]
  };

  makeAddPropertyTest(addNestedArrayConfig)(expect);
});
