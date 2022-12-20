import * as React from 'react';

import { StyleSheet, Text, TextProps } from 'react-native';

type TypographyProps = {
  children: React.ReactNode;
} & TextProps;

const defaultStyles = StyleSheet.create({
  typography: {
    fontFamily: 'Source Sans Pro',
    fontSize: 16,
    fontWeight: '300',
  },
});

export const Typography: React.FC<TypographyProps> = (props) => {
  const { children, style, ...textProps } = props;

  return (
    <Text style={[defaultStyles.typography, style]} {...textProps}>
      {children}
    </Text>
  );
};
