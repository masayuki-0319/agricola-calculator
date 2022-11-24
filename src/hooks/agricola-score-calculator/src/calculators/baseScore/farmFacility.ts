import {
  CoefficientResource,
  ScoreCoefficient,
  scoreGenerator,
} from '../util/scoreCofficient';
import { validateNumber } from '../util/validateNumber';

import type { FarmFacilityResource } from '../../types';

export function calculateField(field: number): number {
  const result = calculateFarm(field, 'field');

  return result;
}

export function calculatePastures(pastures: number): number {
  const result = calculateFarm(pastures, 'pastures');

  return result;
}

export function calculateEmtpyFamyard(emtpyFamyard: number): number {
  validateNumber(emtpyFamyard);

  const result = emtpyFamyard * -1;

  return result;
}

export function calculateFancedStable(fancedStable: number): number {
  validateNumber(fancedStable);

  const result = fancedStable * 1;

  return result;
}

const ROOM_COEFFICIENT = {
  room: {
    wood: 0,
    cray: 1,
    stone: 2,
  },
};

export function calculateRoom(room: FarmFacilityResource['room']): number {
  validateNumber(room.count);

  const result = ROOM_COEFFICIENT.room[room.type] * room.count;

  return result;
}

type Farm = 'field' | 'pastures';
const FIELD_UNIT: CoefficientResource = [1, 2, 3, 4, 5];
const PASTURES_UNIT: CoefficientResource = [0, 1, 2, 3, 4];

const FARM_COEFFICIENT: { [P in Farm]: ScoreCoefficient } = {
  field: scoreGenerator(FIELD_UNIT),
  pastures: scoreGenerator(PASTURES_UNIT),
};

function calculateFarm(resultCount: number, farm: Farm): number {
  validateNumber(resultCount);
  const coefficient = FARM_COEFFICIENT[farm];

  if (resultCount >= coefficient.score5.resultCount) {
    return coefficient.score5.scorePoint;
  } else if (resultCount >= coefficient.score4.resultCount) {
    return coefficient.score4.scorePoint;
  } else if (resultCount >= coefficient.score3.resultCount) {
    return coefficient.score3.scorePoint;
  } else if (resultCount >= coefficient.score2.resultCount) {
    return coefficient.score2.scorePoint;
  } else if (resultCount <= coefficient.score1.resultCount) {
    return coefficient.score1.scorePoint;
  } else {
    throw new Error();
  }
}
