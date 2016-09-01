import { expect } from 'chai';
import { chris } from './fixtures/chris';
import { ChangeBuffer } from '../src/index';

describe('rollback on ChangeBuffer', () => {
  let buffer: ChangeBuffer;
  beforeEach(() => {
    buffer = new ChangeBuffer(chris);
  });

  it('is clean', () => {
    expect(buffer.isClean()).to.be.true;
    expect(buffer.isDirty()).to.be.false;
  });

  describe('making some changes', () => {
    beforeEach(() => {
      buffer.set('firstName', 'Christopher');
      buffer.set('thing1.thing2', 'this is thing2');
    });

    it('shows the changes', () => {
      expect(buffer.get('firstName')).to.equal('Christopher');
      expect(buffer.get('thing1.thing2')).to.equal('this is thing2');
    });

    it('is dirty', () => {
      expect(buffer.isClean()).to.be.false;
      expect(buffer.isDirty()).to.be.true;
    });

    describe('rolling back the changes', () => {
      beforeEach(() => {
        buffer.rollback();
      });

      it('resets the buffer', () => {
        expect(buffer.get('thing1.thing2')).to.be.undefined;
        expect(buffer.get('firstName')).to.equal('Chris');
      });

      it('is clean', () => {
        expect(buffer.isClean()).to.be.true;
        expect(buffer.isDirty()).to.be.false;
      });
    });
  });
});
