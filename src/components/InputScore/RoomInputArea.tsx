import * as React from 'react';

import { View, StyleSheet } from 'react-native';

import { ScoreResource } from '../../hooks/agricola-score-calculator/src';
import { Typography } from '../Typography';

import { InputScoreButton } from './InputScoreButton';

type Props = {
  resourceResult: ScoreResource['farmFacility']['room'];
  setResourceResult: Function;
};

export const RoomInputArea: React.FC<Props> = (props) => {
  const { resourceResult, setResourceResult } = props;

  const onPress = React.useCallback(
    (valueInput: -1 | 1, currentInputScore: typeof resourceResult): void => {
      const updateInputText = {
        ...currentInputScore,
        count: valueInput + currentInputScore.count,
      };

      if (updateInputText.count < 0) return;

      setResourceResult(updateInputText);
    },
    [setResourceResult]
  );

  return (
    <View style={styles.container}>
      <View style={styles.changeTextArea}>
        <InputScoreButton onPress={() => onPress(-1, resourceResult)}>
          <Typography text='-' style={styles.changeText} />
        </InputScoreButton>
      </View>
      <View style={styles.inputTextArea}>
        <Typography text={resourceResult.count} style={styles.inputText} />
      </View>
      <View style={styles.changeTextArea}>
        <InputScoreButton onPress={() => onPress(1, resourceResult)}>
          <Typography text='+' style={styles.changeText} />
        </InputScoreButton>
      </View>
    </View>
  );
};

const CHANGE_TEXT_AREA_COLOR = '#315B7A';
const CHANGE_TEXT_COLOR = '#CFCBB0';
const INPUT_AREA_COLOR = '#163448';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  changeTextArea: {
    flexGrow: 1,
    height: 70,
    backgroundColor: CHANGE_TEXT_AREA_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeText: {
    fontSize: 30,
    color: CHANGE_TEXT_COLOR,
  },
  inputTextArea: {
    width: 120,
    height: 70,
    backgroundColor: INPUT_AREA_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 65,
    color: CHANGE_TEXT_AREA_COLOR,
  },
});
