import * as React from 'react';

import { View, StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export const Body: React.FC<Props> = (props) => {
  const { children } = props;

  return <View style={styles.body}>{children}</View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#203D50',
  },
});
