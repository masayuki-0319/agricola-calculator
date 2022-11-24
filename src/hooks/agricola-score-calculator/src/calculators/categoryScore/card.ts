import { calculateCardBasePoint, calculateCardEndBonus } from '../baseScore';

import type { CardResource } from '../../types';

export function calculateCard(card: CardResource): number {
  const { basePoint, endBonus } = card;

  const result =
    calculateCardBasePoint(basePoint) + calculateCardEndBonus(endBonus);

  return result;
}
