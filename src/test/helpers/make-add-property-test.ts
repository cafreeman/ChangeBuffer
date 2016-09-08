import { ChangeBuffer, Indexable} from '../../lib/index';
import { get } from 'lodash/fp';

export interface AddPropTestConfig {
  title: string;
  data: Indexable;
  path: string;
  newValue: any;
}

export function makeAddPropertyTest(config: AddPropTestConfig) {
  const { title, data, path, newValue } = config;
  return (expect) => {
    let buffer: ChangeBuffer<Indexable>;
    beforeEach(() => {
      buffer = new ChangeBuffer(data);
    });

    describe(title, () => {
      beforeEach(() => {
        buffer.set(path, newValue);
      });

      it('adds the new property to the buffer', () => {
        expect(buffer.get(path)).to.equal(newValue);
      });

      it('does not add the property to the original object', () => {
        expect(get(path, data)).to.be.undefined;
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
          expect(get(path, data)).to.be.undefined;
        });
      });
    });
  }
}
