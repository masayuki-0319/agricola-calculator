import * as React from 'react';

import { View, Text, StyleSheet } from 'react-native';

type Props = {};

export const Home: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Page</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
