import { get } from '../../src/utils/get';

export function makeGetTest({ title, data, path, testValue}: GetPropTestConfig) {
  return (expect) => {
    describe(title, () => {
      let value;
      beforeEach(() => {
        value = get(path, data);
      });

      it('returns the correct value', () => {
        expect(value).to.equal(testValue);
      });
    });
  };
}
