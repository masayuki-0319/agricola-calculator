import React from 'react';

import { View, StyleSheet, ImageBackground } from 'react-native';

import { ScoreResourceImage } from '../../assets';
import { Spacer } from '../Spacer';
import { Typography } from '../Typography';

export const InputScore: React.FC = () => {
  const points = -4;

  const TitleArea: React.FC = () => {
    return (
      <View style={styles.resourceTextArea}>
        <Typography text='Fields' style={styles.resourceText} />
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          {/**
           * @TODO
           * スコアを囲う丸が楕円のため、真円に修正すること
           */}
          <View
            style={[
              styles.resourceScoreArea,
              {
                backgroundColor: points > 0 ? '#1B3B53' : '#EF4748',
              },
            ]}
          >
            <Typography
              text='points'
              style={[styles.resourceText, { color: 'white' }]}
            />
          </View>
          <Spacer width={12} />
          <Typography text='Points' style={styles.resourceText} />
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <ImageBackground
          source={{
            uri: ScoreResourceImage.Fields,
          }}
          style={{
            width: 360,
            height: 150,
          }}
          imageStyle={{
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          }}
        >
          <View
            style={{
              width: 360,
              height: 50,
              position: 'absolute',
              bottom: 0,
            }}
          >
            <View
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              <TitleArea />
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
  container: {},
  resourceImageArea: {},
  resourceImage: {},
  resourceTextArea: {
    height: 50,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resourceScoreArea: {
    textAlign: 'center',
    justifyContent: 'center',
    width: 30,
    borderRadius: 50,
  },
  resourceText: {
    fontSize: 16,
    fontFamily: 'Source Sans Pro',
    color: '#CFCBC0',
  },
  descriptionText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
