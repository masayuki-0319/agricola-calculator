import {
  calculateField,
  calculatePastures,
  calculateEmtpyFamyard,
  calculateFancedStable,
  calculateRoom,
} from '../baseScore/farmFacility';

import type { FarmFacilityResource } from '../../types';

export function calculateFarmFacility(farm: FarmFacilityResource): number {
  const { field, pastures, emtpyFamyard, fancedStable, room } = farm;

  const result =
    calculateField(field) +
    calculatePastures(pastures) +
    calculateEmtpyFamyard(emtpyFamyard) +
    calculateFancedStable(fancedStable) +
    calculateRoom(room);

  return result;
}
