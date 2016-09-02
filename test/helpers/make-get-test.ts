import { get } from '../../src/utils/get';

export function makeGetTest({ title, testData, testPath, testValue}) {
  return (expect) => {
    describe(title, () => {
      let value;
      beforeEach(() => {
        value = get(testPath, testData);
      });

      it('returns the correct value', () => {
        expect(value).to.equal(testValue);
      });
    });
  };
}
