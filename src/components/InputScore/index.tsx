import React from 'react';

import { View, StyleSheet, ImageBackground } from 'react-native';

import { ScoreResourceImage } from '../../assets';
import { Typography } from '../Typography';

import { TitleArea } from './TitleArea';

export const InputScore: React.FC = () => {
  const points = -4;

  return (
    <View>
      <View style={styles.resourceImageArea}>
        <ImageBackground
          source={{
            uri: ScoreResourceImage.Fields,
          }}
          style={styles.imageArea}
          imageStyle={styles.imageStyle}
        >
          <View style={styles.imageFooterArea}>
            <View style={styles.titleArea}>
              <TitleArea points={points} />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View>
        <Typography text='- 0 +' style={styles.descriptionText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resourceImageArea: {
    flexDirection: 'row',
  },
  imageArea: {
    width: 360,
    height: 150,
  },
  imageStyle: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  imageFooterArea: {
    width: 360,
    height: 50,
    position: 'absolute',
    bottom: 0,
  },
  titleArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  descriptionText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
