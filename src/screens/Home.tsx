import * as React from 'react';

import { View, StyleSheet } from 'react-native';

import { ScoreInput } from '../components/ScoreInput';

type Props = {};

export const Home: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ScoreInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
  },
});
