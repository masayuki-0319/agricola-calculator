import * as React from 'react';

import { View, StyleSheet } from 'react-native';

import { Typography } from '../Typography';

type Props = {
  inputText: number;
};

export const InputArea: React.FC<Props> = (props) => {
  const { inputText } = props;

  return (
    <View style={styles.container}>
      <View style={styles.changeTextArea}>
        <Typography text='-' style={styles.changeText} />
      </View>
      <View style={styles.inputTextArea}>
        <Typography text={inputText} style={styles.inputText} />
      </View>
      <View style={styles.changeTextArea}>
        <Typography text='+' style={styles.changeText} />
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
