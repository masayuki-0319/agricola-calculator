import {
  calculateFamily,
  calculateCard,
  calculateFarmFacility,
  calculateProducts,
} from '../categoryScore';

import type { ScoreResource } from '../../types';

export function calculateAllScore(scoreResource: ScoreResource): number {
  const { farmFacility, family, card, products } = scoreResource;

  const farmFacilityScore = calculateFarmFacility(farmFacility);
  const familyScore = calculateFamily(family);
  const cardScore = calculateCard(card);
  const productsScore = calculateProducts(products);

  const result = farmFacilityScore + familyScore + cardScore + productsScore;

  return result;
}
