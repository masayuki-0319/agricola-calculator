import {
  calculateGrain,
  calculateVegetables,
  calculateSheep,
  calculateWildBoar,
  calculateCattle,
} from '../../src/calculators/baseScore';
import { baseScoreTest } from '../util/baseScoreTestModule';

describe('Test baseScore', () => {
  describe('calculateGrain:', () => {
    const testFunction = calculateGrain;

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
        expected: 1,
      },
      {
        input: 4,
        expected: 2,
      },
      {
        input: 5,
        expected: 2,
      },
      {
        input: 6,
        expected: 3,
      },
      {
        input: 7,
        expected: 4,
      },
      {
        input: 9,
        expected: 4,
      },
    ];

    baseScoreTest(testFunction, testCases);
  });

  describe('calculateVegetables:', () => {
    const testFunction = calculateVegetables;

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
      {
        input: 5,
        expected: 4,
      },
    ];

    baseScoreTest(testFunction, testCases);
  });

  describe('calculateSheep:', () => {
    const testFunction = calculateSheep;

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
        expected: 1,
      },
      {
        input: 4,
        expected: 2,
      },
      {
        input: 5,
        expected: 2,
      },
      {
        input: 6,
        expected: 3,
      },
      {
        input: 7,
        expected: 3,
      },
      {
        input: 8,
        expected: 4,
      },
    ];
    baseScoreTest(testFunction, testCases);
  });

  describe('calculateWildBoar:', () => {
    const testFunction = calculateWildBoar;

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
        expected: 1,
      },
      {
        input: 3,
        expected: 2,
      },
      {
        input: 5,
        expected: 3,
      },
      {
        input: 7,
        expected: 4,
      },
    ];

    baseScoreTest(testFunction, testCases);
  });

  describe('calculateCattle:', () => {
    const testFunction = calculateCattle;

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
        expected: 2,
      },
      {
        input: 4,
        expected: 3,
      },
      {
        input: 5,
        expected: 3,
      },
      {
        input: 6,
        expected: 4,
      },
    ];

    baseScoreTest(testFunction, testCases);
  });
});
