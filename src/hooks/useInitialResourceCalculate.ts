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

/**
 * @Note
 * ScoreResource の Value の型定義から、Key を抽出する
 */
type ValueToKey<V extends ScoreResource[keyof ScoreResource]> = {
  [K in keyof ScoreResource]: ScoreResource[K] extends V ? K : never;
}[keyof ScoreResource];

export const useInitialResourceCalculate: {} = () => {
  const [resourceResult, setResourceResult] = React.useState<ScoreResource>(
    initialResourceResult
  );

  const onChangeResourceResult =
    <T extends ScoreResource[keyof ScoreResource]>(
      resourceCategoryKey: ValueToKey<T>
    ) =>
    (resourceKey: keyof ScoreResource[ValueToKey<T>]) =>
    (inputResourceResult: T[keyof T]) => {
      setResourceResult((latest) => {
        return {
          ...latest,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          [latest[resourceCategoryKey][resourceKey]]: inputResourceResult,
        };
      });
    };

  /**
   * @TODO
   * 全てのリソースに対する定義を追加すること
   */
  const calculateItems = [
    {
      resourceKey: 'field',
      resourceTitle: 'Fields',
      resourceImage: ScoreResourceImage.Fields,
      calculateScore: calculateField,
      setResourceResult:
        onChangeResourceResult<FarmFacilityResource>('farmFacility')('field'),
    },
  ];

  return [resourceResult, calculateItems];
};
