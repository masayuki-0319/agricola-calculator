import {
  calculateField,
  calculatePastures,
  calculateEmtpyFamyard,
  calculateFancedStable,
  calculateRoom,
} from '../baseScore/farmFacility';

import type { FarmFacilityResource } from '../../types';

export function calculateFarmFacility(farm: FarmFacilityResource): number {
  const {
    field,
    pastures,
    emtpyFamyard,
    fancedStable,
    room,
    crayRoom,
    stoneRoom,
  } = farm;

  let roomResult = 0;
  if (crayRoom != null && stoneRoom != null) {
    const crayRoomResult = calculateRoom({ type: 'cray', count: crayRoom });
    const stoneRoomResult = calculateRoom({ type: 'stone', count: stoneRoom });

    roomResult = crayRoomResult + stoneRoomResult;
  }
  const result =
    calculateField(field) +
    calculatePastures(pastures) +
    calculateEmtpyFamyard(emtpyFamyard) +
    calculateFancedStable(fancedStable) +
    calculateRoom(room) +
    roomResult;

  return result;
}
