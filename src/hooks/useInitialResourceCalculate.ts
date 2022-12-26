import React from 'react';

import {
  CardResource,
  FamilyResource,
  FarmFacilityResource,
  ProductsResource,
  ScoreResource,
} from './agricola-score-calculator/src';

const initialFarmRacility: NonNullable<FarmFacilityResource> = {
  field: 0,
  pastures: 0,
  emtpyFamyard: 0,
  fancedStable: 0,
  room: {
    type: 'wood',
    count: 2,
  },
  crayRoom: 0,
  stoneRoom: 0,
};

const initialProducts: ProductsResource = {
  grain: 0,
  vegetables: 0,
  sheep: 0,
  wildBoar: 0,
  cattle: 0,
};

const initialFamily: FamilyResource = {
  familyMember: 2,
  beggingCard: 0,
};

const initialCard: CardResource = {
  basePoint: 0,
  endBonus: 0,
};

const initialResourceResult: ScoreResource = {
  farmFacility: initialFarmRacility,
  products: initialProducts,
  family: initialFamily,
  card: initialCard,
};

export type ScoreResourceCategory = ScoreResource[keyof ScoreResource];

type ValueToCategoryKey<T extends ScoreResourceCategory> = {
  [K in keyof ScoreResource]: ScoreResource[K] extends T ? K : never;
}[keyof ScoreResource];

type OnChangeResourceResult = <T extends ScoreResourceCategory>(
  resourceCategoryKey: ValueToCategoryKey<T>
) => (resourceKey: keyof T) => (inputResourceResult: number) => void;

export const useInitialResourceCalculate = (): {
  resourceResult: ScoreResource;
  onChangeResourceResult: OnChangeResourceResult;
} => {
  const [resourceResult, setResourceResult] = React.useState<ScoreResource>(
    initialResourceResult
  );

  const onChangeResourceResult: OnChangeResourceResult =
    (resourceCategoryKey) => (resourceKey) => (inputResourceResult) => {
      setResourceResult((latest) => {
        return {
          ...latest,
          [resourceCategoryKey]: {
            ...latest[resourceCategoryKey],
            [resourceKey]: inputResourceResult,
          },
        };
      });
    };

  return { resourceResult, onChangeResourceResult };
};
