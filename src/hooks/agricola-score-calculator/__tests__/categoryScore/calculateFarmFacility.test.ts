import { calculateFarmFacility } from '../../src/calculators/categoryScore';

import { FarmFacilityResource } from '../../src/types/ScoreResource';

describe('Core test calculateFarmFacility', () => {
  describe('Fine:', () => {
    test('basic', () => {
      const fineInput: FarmFacilityResource = {
        field: 0,
        pastures: 0,
        emtpyFamyard: 0,
        fancedStable: 0,
        room: {
          type: 'wood',
          count: 0,
        },
      };

      expect(calculateFarmFacility(fineInput)).toBe(-2);
    });
  });
});
