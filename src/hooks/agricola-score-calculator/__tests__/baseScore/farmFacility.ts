import { FarmFacilityResource } from '../../src';
import {
  calculateField,
  calculatePastures,
  calculateEmtpyFamyard,
  calculateFancedStable,
  calculateRoom,
} from '../../src/calculators/baseScore';
import { baseScoreTest } from '../util/baseScoreTestModule';

describe('Test baseScore', () => {
  describe('calculateField:', () => {
    const testFunction = calculateField;

    const testCases = [
      {
        input: 0,
        expected: -1,
      },
      {
        input: 1,
        expected: -1,
      },
      {
        input: 2,
        expected: 1,
      },
      {
        input: 3,
        expected: 2,
      },
      {
        input: 4,
        expected: 3,
      },
      {
        input: 5,
        expected: 4,
      },
    ];

    baseScoreTest(testFunction, testCases);
  });

  describe('calculatePastures:', () => {
    const testFunction = calculatePastures;

    const testCases = [
      {
        input: 0,
        expected: -1,
      },
      {
        input: 1,
        expected: 1,
      },
      {
        input: 2,
        expected: 2,
      },
      {
        input: 3,
        expected: 3,
      },
      {
        input: 4,
        expected: 4,
      },
    ];

    baseScoreTest(testFunction, testCases);
  });

  describe('calculateEmtpyFamyard:', () => {
    const testFunction = calculateEmtpyFamyard;

    const testCases = [
      {
        input: 1,
        expected: -1,
      },
      {
        input: 5,
        expected: -5,
      },
    ];

    baseScoreTest(testFunction, testCases);
  });

  describe('calculateFancedStable:', () => {
    const testFunction = calculateFancedStable;

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

  describe('calculateRoom:', () => {
    const testFunction = calculateRoom;

    describe('[Fine]', () => {
      test('case 1', () => {
        const fineInput: FarmFacilityResource['room'] = {
          type: 'wood',
          count: 2,
        };
        const expectedOutput = 0;

        expect(testFunction(fineInput)).toBe(expectedOutput);
      });

      test('case 2', () => {
        const fineInput: FarmFacilityResource['room'] = {
          type: 'cray',
          count: 3,
        };
        const expectedOutput = 3;

        expect(testFunction(fineInput)).toBe(expectedOutput);
      });

      test('case 3', () => {
        const fineInput: FarmFacilityResource['room'] = {
          type: 'stone',
          count: 4,
        };
        const expectedOutput = 8;

        expect(testFunction(fineInput)).toBe(expectedOutput);
      });
    });

    describe('[Bad]', () => {
      test('cannot input negative integer', () => {
        const badCase = -1;

        expect(() =>
          testFunction({ type: 'cray', count: badCase })
        ).toThrowError(Error);
      });

      test('cannot input float integer', () => {
        const badCase = 1.5;

        expect(() =>
          testFunction({ type: 'cray', count: badCase })
        ).toThrowError(Error);
      });
    });
  });
});
