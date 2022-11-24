import { calculateAllScore, ScoreResource } from '../../src';

describe('Core test calculateCard', () => {
  describe('Fine:', () => {
    test('basic', () => {
      const fineInput: ScoreResource = {
        farmFacility: {
          field: 0,
          pastures: 0,
          emtpyFamyard: 0,
          fancedStable: 0,
          room: {
            type: 'wood',
            count: 2,
          },
        },
        products: {
          grain: 0,
          vegetables: 0,
          sheep: 0,
          wildBoar: 0,
          cattle: 0,
        },
        family: {
          familyMember: 2,
          beggingCard: 0,
        },
        card: {
          basePoint: 0,
          endBonus: 0,
        },
      };

      expect(calculateAllScore(fineInput)).toBe(-1);
    });
  });
});
