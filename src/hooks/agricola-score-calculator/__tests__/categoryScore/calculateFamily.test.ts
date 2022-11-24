import { calculateFamily } from '../../src/calculators/categoryScore';

describe('Core test calculateFamily', () => {
  describe('Fine:', () => {
    test('basic', () => {
      const fineInput = {
        familyMember: 2,
        beggingCard: 0,
      };

      expect(calculateFamily(fineInput)).toBe(6);
    });
  });
});
