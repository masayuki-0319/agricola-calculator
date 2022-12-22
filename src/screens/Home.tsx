import * as React from 'react';

import { View, StyleSheet } from 'react-native';

import { ScoreResourceImage } from '../assets';
import { InputScore } from '../components/InputScore';
import { calculateField } from '../hooks/agricola-score-calculator/src';

type Props = {};

export const Home: React.FC<Props> = () => {
  const resourceTitle = 'Fields';
  const resourceImage = ScoreResourceImage.Fields;
  const calculateScore = React.useCallback(calculateField, []);
  const [resourceResult, setResourceResult] = React.useState(0);

  return (
    <View style={styles.container}>
      <InputScore
        resourceTitle={resourceTitle}
        resourceImage={resourceImage}
        resourceResult={resourceResult}
        onChangeResourceResult={setResourceResult}
        calculateScore={calculateScore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
  },
});
