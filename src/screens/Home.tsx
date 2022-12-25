import * as React from 'react';

import { View, StyleSheet } from 'react-native';

import { ScoreResourceImage } from '../assets';
import { Spacer } from '../components';
import { InputScore } from '../components/InputScore';
import {
  calculateField,
  FarmFacilityResource,
} from '../hooks/agricola-score-calculator/src';
import { useInitialResourceCalculate } from '../hooks/useInitialResourceCalculate';

type Props = {};

export const Home: React.FC<Props> = () => {
  const { resourceResult, onChangeResourceResult } =
    useInitialResourceCalculate();

  type CalculateItem = {
    resourceTitle: string;
    resourceImage: string;
    resourceTitleResult: number;
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

      const spacer =
        index === 0 || index % 2 === 1 ? <Spacer height={30} /> : null;

      return (
        <View key={index}>
          <InputScore
            resourceTitle={resourceTitle}
            resourceImage={resourceImage}
            resourceResult={resourceTitleResult}
            onChangeResourceResult={setResourceResult}
            calculateScore={calculateScore}
          />
          {spacer}
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
