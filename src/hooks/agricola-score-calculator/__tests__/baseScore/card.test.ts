import {
  calculateCardBasePoint,
  calculateCardEndBonus,
} from '../../src/calculators/baseScore';
import { baseScoreTest } from '../util/baseScoreTestModule';

describe('Test baseScore', () => {
  describe('calculateCardBasePoint:', () => {
    const testFunction = calculateCardBasePoint;

    const testCases = [
      {
        input: 1,
        expected: 1,
      },
      {
        input: 5,
        expected: 5,
      },
    ];

    baseScoreTest(testFunction, testCases);
  });

  describe('calculateCardEndBonus:', () => {
    const testFunction = calculateCardEndBonus;

    const testCases = [
      {
        input: 1,
        expected: 1,
      },
      {
        input: 5,
        expected: 5,
      },
    ];

    baseScoreTest(testFunction, testCases);
  });
});
