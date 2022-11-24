import {
  calculateFamilyMember,
  calculateBeggingCard,
} from '../../src/calculators/baseScore';
import { baseScoreTest } from '../util/baseScoreTestModule';

describe('Test baseScore', () => {
  describe('calculateFamilyMember:', () => {
    const testFunction = calculateFamilyMember;

    const testCases = [
      {
        input: 2,
        expected: 6,
      },
      {
        input: 3,
        expected: 9,
      },
    ];

    baseScoreTest(testFunction, testCases);
  });

  describe('calculateBeggingCard:', () => {
    const testFunction = calculateBeggingCard;

    const testCases = [
      {
        input: 1,
        expected: -3,
      },
      {
        input: 2,
        expected: -6,
      },
    ];

    baseScoreTest(testFunction, testCases);
  });
});
