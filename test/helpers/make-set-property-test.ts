import { ChangeBuffer } from '../../src/index';
import * as _ from 'lodash/fp';

interface UpdatePropTestConfig {
  testTitle: string;
  startingObject: {};
  path: string;
  oldValue: any;
  newValue: any;
}

export function makeSetPropertyTest(config: UpdatePropTestConfig) {
  const { testTitle, startingObject, path, oldValue, newValue } = config;
  return (expect) => {
    let buffer: ChangeBuffer;
    beforeEach(() => {
      buffer = new ChangeBuffer(startingObject);
    });

    describe(testTitle, () => {
      beforeEach(() => {
        buffer.set(path, newValue);
      })

      it('reflects the changed value', () => {
        expect(buffer.get(path)).to.equal(newValue);
      });

      it('does not change the underlying object', () => {
        expect(_.get(path, startingObject)).to.equal(oldValue);
      });

      describe('applying the buffer', () => {
        let newThing;
        beforeEach(() => {
          newThing = buffer.apply();
        });

        it('returns a new object', () => {
          expect(newThing).to.not.deep.equal(startingObject);
          expect(newThing).to.not.equal(startingObject);
        })

        it('reflects the correct changes', () => {
          expect(_.get(path, newThing)).to.equal(newValue);
        });

        it('does not mutate the original object', () => {
          expect(_.get(path, startingObject)).to.equal(oldValue);
        });
      });
    });
  }
}
