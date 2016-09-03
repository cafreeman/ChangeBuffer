import { ChangeBuffer } from '../../src/index';
import { get } from 'lodash/fp';

export function makeSetPropertyTest({ title, data, path, oldValue, newValue }: UpdatePropTestConfig) {
  return (expect) => {
    let buffer: ChangeBuffer;
    beforeEach(() => {
      buffer = new ChangeBuffer(data);
    });

    describe(title, () => {
      beforeEach(() => {
        buffer.set(path, newValue);
      })

      it('reflects the changed value', () => {
        expect(buffer.get(path)).to.equal(newValue);
      });

      it('does not change the underlying object', () => {
        expect(get(path, data)).to.equal(oldValue);
      });

      describe('applying the buffer', () => {
        let newThing;
        beforeEach(() => {
          newThing = buffer.apply();
        });

        it('returns a new object', () => {
          expect(newThing).to.not.deep.equal(data);
          expect(newThing).to.not.equal(data);
        })

        it('reflects the correct changes', () => {
          expect(get(path, newThing)).to.equal(newValue);
        });

        it('does not mutate the original object', () => {
          expect(get(path, data)).to.equal(oldValue);
        });
      });
    });
  }
}
