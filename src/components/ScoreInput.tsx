import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

import { ScoreResourceImage } from '../assets';

import { Spacer } from './Spacer';

export const ScoreInput: React.FC = () => {
  const points = 4;

  return (
    <View style={styles.container}>
      <View style={styles.scoreArea}>
        <View>
          <Image
            source={{
              uri: ScoreResourceImage.Fields,
            }}
            style={styles.scoreImage}
          />
        </View>
        <View>
          <View style={styles.scoreBottomArea}>
            <Text style={styles.scoreText}>Fields</Text>
            <View>
              <View
                style={[
                  styles.scoreTextRoundArea,
                  {
                    backgroundColor: points > 0 ? 'blue' : 'red',
                  },
                ]}
              >
                <Text style={[styles.scoreText, { color: 'white' }]}>
                  {points}
                </Text>
              </View>
              <Spacer width={2} />
              <Text style={styles.scoreText}>Points</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.descriptionText}>
            DescriptionTextDescriptionTextDescriptionTextDescriptionTextDescriptionTextDescriptionTextDescriptionTextDescriptionTextDescriptionTextDescriptionText..............
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    maxWidth: 470,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
  },
  scoreArea: {
    width: 470,
    height: 250,
  },
  scoreBottomArea: {
    backgroundColor: 'black',
    opacity: 50,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
  },
  scoreImage: {
    width: 470,
    height: 200,
    resizeMode: 'contain',
  },
  scoreTextRoundArea: {
    textAlign: 'center',
    width: 8,
    borderRadius: 50,
  },
  scoreText: {
    fontSize: 20,
  },
  descriptionText: {
    fontWeight: 'bold',
    overflow: 'visible',
  },
});
