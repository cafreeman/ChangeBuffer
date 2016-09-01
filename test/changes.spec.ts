import { expect } from 'chai';
import * as _ from 'lodash/fp';
import { chris } from './data';
import { ChangeBuffer } from '../src/index';

describe('ChangeBuffer', () => {
  let chrisBuffer: ChangeBuffer;
  beforeEach(() => {
    chrisBuffer = new ChangeBuffer(chris);
  });

  describe('setting a root-level value', () => {
    beforeEach(() => {
      chrisBuffer.set('firstName', 'Christopher');
    });

    it('reflects the changed value', () => {
      expect(chrisBuffer.get('firstName')).to.equal('Christopher');
    });

    it('does not change the underlying object', () => {
      expect(chris.firstName).to.equal('Chris');
    });

    describe('applying the buffer', () => {
      let newThing;
      beforeEach(() => {
        newThing = chrisBuffer.apply();
      });

      it('returns a new object', () => {
        expect(newThing).to.not.deep.equal(chris);
        expect(newThing).to.not.equal(chris);
      })

      it('reflects the correct changes', () => {
        expect(newThing.firstName).to.equal('Christopher');
      });

      it('does not mutate the original object', () => {
        expect(chris.firstName).to.equal('Chris');
      });
    });
  });

  describe('setting a nested value', () => {
    let path = 'favoriteBooks[0].title';
    let oldValue = 'The Sun Also Rises';
    let newValue = 'A Moveable Feast';
    beforeEach(() => {
      chrisBuffer.set(path, newValue);
    });

    it('reflects the changed value', () => {
      expect(chrisBuffer.get(path)).to.equal(newValue);
    });

    it('does not change the underlying object', () => {
      expect(_.get(path, chris)).to.equal(oldValue);
    });

    describe('applying the buffer', () => {
      let newThing;
      beforeEach(() => {
        newThing = chrisBuffer.apply();
      });

      it('returns a new object', () => {
        expect(newThing).to.not.deep.equal(chris);
        expect(newThing).to.not.equal(chris);
      })

      it('reflects the correct changes', () => {
        expect(_.get(path, newThing)).to.equal(newValue);
      });

      it('does not mutate the original object', () => {
        expect(_.get(path, chris)).to.equal(oldValue);
      });
    });
  });
});
