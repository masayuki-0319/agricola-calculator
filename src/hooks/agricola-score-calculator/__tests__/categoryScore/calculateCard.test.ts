import { calculateCard } from '../../src/calculators/categoryScore';

describe('Core test calculateCard', () => {
  describe('Fine:', () => {
    test('basic', () => {
      const fineInput = { basePoint: 1, endBonus: 1 };

      expect(calculateCard(fineInput)).toBe(2);
    });
  });
});
