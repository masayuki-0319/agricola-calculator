import * as React from 'react';

import { View, StyleSheet } from 'react-native';

import { InputScore, Spacer } from '../../components';
import { CalculateItem } from '../hooks';

type Props = {
  calculateItems: CalculateItem[];
};

export const InputArea: React.FC<Props> = (props) => {
  const { calculateItems } = props;

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
    flex: 1,
  },
});
