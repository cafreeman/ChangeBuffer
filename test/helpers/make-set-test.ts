import { set } from '../../src/utils/set';

export function makeSetTest({ title, data, path, oldValue, newValue }: UpdatePropTestConfig) {
  return (expect) => {
    let obj;
    beforeEach(() => {
      obj = data;
    });

    describe(title, () => {
      let newObj;
      beforeEach(() => {
        newObj = set('firstName', 'Christopher', obj);
      });

      it('should produce an entirely new object', () => {
        expect(newObj).to.exist;
        expect(obj).to.not.equal(newObj);
        expect(obj).to.not.deep.equal(newObj);
      });

      it('should contain the new value', () => {
        expect(newObj[path]).to.equal(newValue);
      });

      it('should not mutate the old value', () => {
        expect(obj[path]).to.equal(oldValue);
      });
    });
  };
}
