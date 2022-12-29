import * as React from 'react';

import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Typography } from '../../components/Typography';
import { ScoreResource } from '../../hooks/agricola-score-calculator/src';

export type Props = {
  resourceResult?: ScoreResource;
};

export const CalculateButton: React.FC<Props> = (props) => {
  const { resourceResult } = props;

  const [showScore, setShowScore] = React.useState(false);

  const onPressShowScore = (): void => setShowScore((latest) => !latest);

  return (
    <View>
      <TouchableOpacity onPress={onPressShowScore} activeOpacity={1}>
        <View style={styles.buttonArea}>
          <Typography text='CALCULATE MY SCORE' style={styles.buttonText} />
        </View>
      </TouchableOpacity>

      {showScore ? (
        <View>
          <Typography text={16} style={styles.resultText} />
        </View>
      ) : null}
    </View>
  );
};

const BUTTON_AREA_COLOR = '#39739D';
const BUTTON_TEXT_COLOR = 'white';
const RESULT_TEXT_COLOR = '#8ecf6c';

const styles = StyleSheet.create({
  buttonArea: {
    width: 360,
    height: 60,
    backgroundColor: BUTTON_AREA_COLOR,
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: BUTTON_TEXT_COLOR,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 160,
    color: RESULT_TEXT_COLOR,
    textAlign: 'center',
  },
});
