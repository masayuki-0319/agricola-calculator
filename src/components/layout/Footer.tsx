import * as React from 'react';

import { View, ImageBackground, StyleSheet } from 'react-native';

import { ProductImage } from '../../assets';
import { Typography } from '../Typography';

type Props = {};

/**
 * @FIXME
 * Footer を画面の最下部に接地させること
 * @See https://scrapbox.io/momomo/ReactNative_%E3%81%A7%E7%94%BB%E5%83%8F%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B
 */
export const Footer: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: ProductImage.FooterBackground }}
        style={styles.backgroundImage}
        imageStyle={{ resizeMode: 'repeat' }}
      >
        <View>
          <Typography text='first' style={styles.text} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    height: 100,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});
