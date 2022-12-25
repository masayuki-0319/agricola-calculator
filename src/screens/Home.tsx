import * as React from 'react';

import { View, StyleSheet } from 'react-native';

import { ScoreResourceImage } from '../assets';
import { Spacer } from '../components';
import { InputScore } from '../components/InputScore';
import {
  calculateBeggingCard,
  calculateCardBasePoint,
  calculateCattle,
  calculateEmtpyFamyard,
  calculateFamilyMember,
  calculateFancedStable,
  calculateField,
  calculateGrain,
  calculatePastures,
  calculateRoom,
  calculateSheep,
  calculateVegetables,
  calculateWildBoar,
  CardResource,
  FamilyResource,
  FarmFacilityResource,
  ProductsResource,
  ScoreResource,
} from '../hooks/agricola-score-calculator/src';
import { useInitialResourceCalculate } from '../hooks/useInitialResourceCalculate';

type Props = {};

export const Home: React.FC<Props> = () => {
  const { resourceResult, onChangeResourceResult } =
    useInitialResourceCalculate();

  type CalculateItem = {
    resourceTitle: string;
    resourceImage: string;
    resourceTitleResult: number | ScoreResource['farmFacility']['room'];
    calculateScore: Function;
    setResourceResult: Function;
  };

  /**
   * @TODO
   * - 全てのリソースに対する定義を追加する
   */
  const calculateItems: CalculateItem[] = [
    {
      resourceTitle: 'Fields',
      resourceImage: ScoreResourceImage.Fields,
      resourceTitleResult: resourceResult.farmFacility.field,
      calculateScore: calculateField,
      setResourceResult:
        onChangeResourceResult<FarmFacilityResource>('farmFacility')('field'),
    },
    {
      resourceTitle: 'Pastures',
      resourceImage: ScoreResourceImage.Pastures,
      resourceTitleResult: resourceResult.farmFacility.pastures,
      calculateScore: calculatePastures,
      setResourceResult:
        onChangeResourceResult<FarmFacilityResource>('farmFacility')(
          'pastures'
        ),
    },
    {
      resourceTitle: 'Grain',
      resourceImage: ScoreResourceImage.Grain,
      resourceTitleResult: resourceResult.products.grain,
      calculateScore: calculateGrain,
      setResourceResult:
        onChangeResourceResult<ProductsResource>('products')('grain'),
    },
    {
      resourceTitle: 'Vegetables',
      resourceImage: ScoreResourceImage.Vegetables,
      resourceTitleResult: resourceResult.products.vegetables,
      calculateScore: calculateVegetables,
      setResourceResult:
        onChangeResourceResult<ProductsResource>('products')('vegetables'),
    },
    {
      resourceTitle: 'Sheep',
      resourceImage: ScoreResourceImage.Sheep,
      resourceTitleResult: resourceResult.products.sheep,
      calculateScore: calculateSheep,
      setResourceResult:
        onChangeResourceResult<ProductsResource>('products')('sheep'),
    },
    {
      resourceTitle: 'WildBoar',
      resourceImage: ScoreResourceImage.WildBoar,
      resourceTitleResult: resourceResult.products.wildBoar,
      calculateScore: calculateWildBoar,
      setResourceResult:
        onChangeResourceResult<ProductsResource>('products')('wildBoar'),
    },
    {
      resourceTitle: 'Cattle',
      resourceImage: ScoreResourceImage.Cattle,
      resourceTitleResult: resourceResult.products.cattle,
      calculateScore: calculateCattle,
      setResourceResult:
        onChangeResourceResult<ProductsResource>('products')('cattle'),
    },
    {
      resourceTitle: 'EmtpyFamyard',
      resourceImage: ScoreResourceImage.EmtpyFamyard,
      resourceTitleResult: resourceResult.farmFacility.emtpyFamyard,
      calculateScore: calculateEmtpyFamyard,
      setResourceResult:
        onChangeResourceResult<FarmFacilityResource>('farmFacility')(
          'emtpyFamyard'
        ),
    },
    {
      resourceTitle: 'FancedStable',
      resourceImage: ScoreResourceImage.FancedStable,
      resourceTitleResult: resourceResult.farmFacility.fancedStable,
      calculateScore: calculateFancedStable,
      setResourceResult:
        onChangeResourceResult<FarmFacilityResource>('farmFacility')(
          'fancedStable'
        ),
    },
    /**
     * @FIXME
     * Room の種類によって出力が分かれるため、他の項目の共通化に不具合あり
     */
    {
      resourceTitle: 'ClayRooms',
      resourceImage: ScoreResourceImage.ClayRooms,
      resourceTitleResult: resourceResult.farmFacility.room,
      calculateScore: calculateRoom,
      setResourceResult:
        onChangeResourceResult<FarmFacilityResource>('farmFacility')('room'),
    },
    {
      resourceTitle: 'Bonus',
      resourceImage: ScoreResourceImage.CardBasePoints,
      resourceTitleResult: resourceResult.card.basePoint,
      calculateScore: calculateCardBasePoint,
      setResourceResult:
        onChangeResourceResult<CardResource>('card')('basePoint'),
    },
    {
      resourceTitle: 'End Bonus` From Cards',
      resourceImage: ScoreResourceImage.CardEndBonus,
      resourceTitleResult: resourceResult.card.endBonus,
      calculateScore: calculateCardBasePoint,
      setResourceResult:
        onChangeResourceResult<CardResource>('card')('endBonus'),
    },
    {
      resourceTitle: 'FamilyMember',
      resourceImage: ScoreResourceImage.FamilyMember,
      resourceTitleResult: resourceResult.family.familyMember,
      calculateScore: calculateFamilyMember,
      setResourceResult:
        onChangeResourceResult<FamilyResource>('family')('familyMember'),
    },
    {
      resourceTitle: 'BeggarCards',
      resourceImage: ScoreResourceImage.BeggarCards,
      resourceTitleResult: resourceResult.family.beggingCard,
      calculateScore: calculateBeggingCard,
      setResourceResult:
        onChangeResourceResult<FamilyResource>('family')('beggingCard'),
    },
  ];

  const renderInputScores = (): React.ReactNode => {
    return calculateItems.map((calculateItem, index) => {
      const {
        resourceTitle,
        resourceImage,
        resourceTitleResult,
        setResourceResult,
        calculateScore,
      } = calculateItem;

      return (
        <View key={index}>
          <InputScore
            resourceTitle={resourceTitle}
            resourceImage={resourceImage}
            resourceResult={resourceTitleResult}
            onChangeResourceResult={setResourceResult}
            calculateScore={calculateScore}
          />
          <Spacer height={30} />
        </View>
      );
    });
  };

  return <View style={styles.container}>{renderInputScores()}</View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
  },
});
