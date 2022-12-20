import React from 'react';

import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import { ScoreResourceImage } from '../../assets';
import { Spacer } from '../Spacer';

export const ScoreInput: React.FC = () => {
  const points = -4;

  const TitleArea: React.FC = () => {
    return (
      <View style={styles.resourceTextArea}>
        <Text style={styles.resourceText}>Fields</Text>
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
            <Text style={[styles.resourceText, { color: 'white' }]}>
              {points}
            </Text>
          </View>
          <Spacer width={12} />
          <Text style={styles.resourceText}>Points</Text>
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
        <Text style={styles.descriptionText}>- 0 +</Text>
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
