import * as React from 'react';

import { View, StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export const Body: React.FC<Props> = (props) => {
  const { children } = props;

  return <View style={styles.body}>{children}</View>;
};

const BODY_COLOR = '#203D50';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: BODY_COLOR,
  },
});
