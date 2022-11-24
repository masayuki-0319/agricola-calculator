import { validateNumber } from '../util/validateNumber';

export function calculateCardBasePoint(basePoint: number): number {
  validateNumber(basePoint);

  return basePoint;
}

export function calculateCardEndBonus(endBonus: number): number {
  validateNumber(endBonus);

  return endBonus;
}
