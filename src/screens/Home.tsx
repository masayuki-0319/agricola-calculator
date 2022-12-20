import * as React from 'react';

import { View, StyleSheet } from 'react-native';

import { InputScore } from '../components/InputScore';

type Props = {};

export const Home: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <InputScore />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
  },
});
