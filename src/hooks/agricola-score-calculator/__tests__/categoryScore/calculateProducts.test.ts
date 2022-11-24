import { calculateProducts } from '../../src/calculators/categoryScore';

describe('Core test calculateProducts', () => {
  describe('Fine:', () => {
    test('basic', () => {
      const fineInput = {
        grain: 0,
        vegetables: 0,
        sheep: 0,
        wildBoar: 0,
        cattle: 0,
      };

      expect(calculateProducts(fineInput)).toBe(-5);
    });
  });
});
