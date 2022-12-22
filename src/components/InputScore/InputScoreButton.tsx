import * as React from 'react';

import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export type InputScoreButtonProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: (e: GestureResponderEvent) => void;
};

export const InputScoreButton: React.FC<InputScoreButtonProps> = (props) => {
  const { children, onPress, style } = props;

  return (
    <TouchableOpacity style={style} onPress={onPress} activeOpacity={1}>
      <View style={styles.textArea}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textArea: {
    flex: 1,
  },
});
