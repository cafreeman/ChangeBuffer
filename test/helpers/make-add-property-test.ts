import { ChangeBuffer } from '../../src/index';
import { get } from '../../src/utils/get';

interface AddPropTestConfig {
  testTitle: string;
  startingObject: {};
  path: string;
  newValue: any;
}

export function makeAddPropertyTest(config: AddPropTestConfig) {
  const { testTitle, startingObject, path, newValue } = config;
  return (expect) => {
    let buffer: ChangeBuffer;
    beforeEach(() => {
      buffer = new ChangeBuffer(startingObject);
    });

    describe(testTitle, () => {
      beforeEach(() => {
        buffer.set(path, newValue);
      });

      it('adds the new property to the buffer', () => {
        expect(buffer.get(path)).to.equal(newValue);
      });

      it('does not add the property to the original object', () => {
        expect(get(path, startingObject)).to.be.undefined;
      });

      describe('applying the buffer', () => {
        let newThing;
        beforeEach(() => {
          newThing = buffer.apply();
        });

        it('produces a new object with the added property', () => {
          expect(get(path, newThing)).to.equal(newValue);
        });

        it('does not change the original object', () => {
          expect(get(path, startingObject)).to.be.undefined;
        });
      });
    });
  }
}
