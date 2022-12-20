import * as React from 'react';

import { StyleSheet, Text, TextProps } from 'react-native';

type TypographyProps = {
  text: string;
} & TextProps;

const defaultStyles = StyleSheet.create({
  typography: {
    fontFamily: 'Source Sans Pro',
    fontSize: 16,
    fontWeight: '300',
  },
});

export const Typography: React.FC<TypographyProps> = (props) => {
  const { text, style, ...textProps } = props;

  return (
    <Text style={[defaultStyles.typography, style]} {...textProps}>
      {text}
    </Text>
  );
};
