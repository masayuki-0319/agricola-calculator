import {
  CoefficientResource,
  ScoreCoefficient,
  scoreGenerator,
} from '../util/scoreCofficient';
import { validateNumber } from '../util/validateNumber';

type Product = 'grain' | 'vegetables' | 'sheep' | 'wildBoar' | 'cattle';
const GRAIN_SCORE_UNIT: CoefficientResource = [0, 1, 4, 6, 7];
const VEGITABLES_SCORE_UNIT: CoefficientResource = [0, 1, 2, 3, 4];
const SHEEP_SCORE_UNIT: CoefficientResource = [0, 1, 4, 6, 8];
const WILD_BOAR_SCORE_UNIT: CoefficientResource = [0, 1, 3, 5, 7];
const CATTLE_SCORE_UNIT: CoefficientResource = [0, 1, 2, 4, 6];

const PRODUCTS_COEFFICIENT: { [P in Product]: ScoreCoefficient } = {
  grain: scoreGenerator(GRAIN_SCORE_UNIT),
  vegetables: scoreGenerator(VEGITABLES_SCORE_UNIT),
  sheep: scoreGenerator(SHEEP_SCORE_UNIT),
  wildBoar: scoreGenerator(WILD_BOAR_SCORE_UNIT),
  cattle: scoreGenerator(CATTLE_SCORE_UNIT),
};

function _calculateProducts(resultCount: number, product: Product): number {
  validateNumber(resultCount);
  const coefficient = PRODUCTS_COEFFICIENT[product];

  if (resultCount >= coefficient.score5.resultCount) {
    return coefficient.score5.scorePoint;
  } else if (resultCount >= coefficient.score4.resultCount) {
    return coefficient.score4.scorePoint;
  } else if (resultCount >= coefficient.score3.resultCount) {
    return coefficient.score3.scorePoint;
  } else if (resultCount >= coefficient.score2.resultCount) {
    return coefficient.score2.scorePoint;
  } else if (resultCount === coefficient.score1.resultCount) {
    return coefficient.score1.scorePoint;
  } else {
    throw new Error();
  }
}

export function calculateGrain(grain: number): number {
  const result = _calculateProducts(grain, 'grain');

  return result;
}

export function calculateVegetables(vegetables: number): number {
  const result = _calculateProducts(vegetables, 'vegetables');

  return result;
}

export function calculateSheep(sheep: number): number {
  const result = _calculateProducts(sheep, 'sheep');

  return result;
}

export function calculateWildBoar(wildBoar: number): number {
  const result = _calculateProducts(wildBoar, 'wildBoar');

  return result;
}

export function calculateCattle(cattle: number): number {
  const result = _calculateProducts(cattle, 'cattle');

  return result;
}
