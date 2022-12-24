import * as React from 'react';

import { View, StyleSheet } from 'react-native';

import { InputScore } from '../components/InputScore';
import { useInitialResourceCalculate } from '../hooks/useInitialResourceCalculate';

type Props = {};

export const Home: React.FC<Props> = () => {
  const { calculateItems } = useInitialResourceCalculate();

  /**
   * @TODO
   * 値が更新されない
   * TS ignore してる箇所か？
   */
  const renderInputScores = (): any => {
    return calculateItems.map((calculateItem) => {
      const {
        resourceTitle,
        resourceImage,
        resourceResult,
        resourceCategoryKey,
        resourceKey,
        setResourceResult,
        calculateScore,
      } = calculateItem;

      return (
        <InputScore
          key={resourceKey}
          resourceTitle={resourceTitle}
          resourceImage={resourceImage}
          resourceResult={resourceResult}
          onChangeResourceResult={setResourceResult}
          calculateScore={calculateScore}
        />
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
