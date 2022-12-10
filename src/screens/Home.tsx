import * as React from 'react';

import { Image } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';

import { ScoreResourceImage } from '../assets';

type Props = {};

export const Home: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Page</Text>
        <Image src={ScoreResourceImage.BeggarCards} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
});
