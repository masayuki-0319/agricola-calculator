import * as React from 'react';

import { View, StyleSheet } from 'react-native';

import { ScoreInput } from '../components/ScoreInput';

type Props = {};

export const Home: React.FC<Props> = () => {
  return (
    <View style={styles.layout}>
      <View style={styles.container}>
        <ScoreInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    margin: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
