/**
 * @目的
 * - 全ての Resource を計算できるような hooks を用意する
 *
 * @TODO
 * - 返却する型を定義する
 * - 必要な外部リソースの型を定義する
 * - 一つの Resource を返せるようにする
 * - 全ての Resource を返せるようにする
 */

import React from 'react';

import { ScoreResourceImage } from '../assets';

import {
  calculateField,
  CardResource,
  FamilyResource,
  FarmFacilityResource,
  ProductsResource,
  ScoreResource,
} from './agricola-score-calculator/src';

const initialFarmRacility: FarmFacilityResource = {
  field: 0,
  pastures: 0,
  emtpyFamyard: 0,
  fancedStable: 0,
  room: {
    type: 'wood',
    count: 0,
  },
};

const initialProducts: ProductsResource = {
  grain: 0,
  vegetables: 0,
  sheep: 0,
  wildBoar: 0,
  cattle: 0,
};

const initialFamily: FamilyResource = {
  familyMember: 0,
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

type AllResourceCategoryKey<T extends ScoreResource> = T extends Object
  ? keyof T
  : never;
type AllResourceKey<T extends ScoreResource[keyof ScoreResource]> =
  T extends Object ? keyof T : never;

type CalculateItem = {
  resourceCategoryKey: AllResourceCategoryKey<ScoreResource>;
  resourceKey: AllResourceKey<ScoreResource[keyof ScoreResource]>;
  resourceTitle: string;
  resourceImage: string;
  resourceResult: number;
  calculateScore: Function;
  setResourceResult: Function;
};

export const useInitialResourceCalculate = (): {
  calculateItems: CalculateItem[];
} => {
  const [resourceResult, setResourceResult] = React.useState<ScoreResource>(
    initialResourceResult
  );

  /**
   * @TODO
   * - 抽象化して、全てのリソースに対応可能とする
   */
  const onChangeFarmFacility =
    (resourceKey: keyof FarmFacilityResource) =>
    (inputResourceResult: number) => {
      setResourceResult((latest) => {
        return {
          ...latest,
          farmFacility: {
            ...latest.farmFacility,
            [resourceKey]: inputResourceResult,
          },
        };
      });
    };

  /**
   * @TODO
   * - 全てのリソースに対する定義を追加する
   */
  const calculateItems: CalculateItem[] = [
    {
      resourceKey: 'field',
      resourceCategoryKey: 'farmFacility',
      resourceTitle: 'Fields',
      resourceImage: ScoreResourceImage.Fields,
      resourceResult: resourceResult.farmFacility.field,
      calculateScore: calculateField,
      setResourceResult: onChangeFarmFacility('field'),
    },
  ];

  return { calculateItems };
};
