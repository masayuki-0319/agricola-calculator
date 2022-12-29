import * as React from 'react';

import { View, ImageBackground, StyleSheet } from 'react-native';

import { ProductImage } from '../../assets';
import { Typography } from '../Typography';

export const Footer: React.FC = () => {
  const originalURL = 'https://mattbru.me/tools/agricola-score-calculator/';

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: ProductImage.FooterBackground }}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}
      >
        <View>
          <Typography
            text='Clone Agricola Score Calculator'
            style={styles.text}
          />
          <a
            href={originalURL}
            style={styles.text}
            target='_blank'
            rel='noreferrer'
          >
            <Typography text={'Original Website'} style={styles.text} />
          </a>
        </View>
      </ImageBackground>
    </View>
  );
};

const FOOTER_TEXT_COLOR = '#837ea1';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: 90,
    paddingTop: 30,
  },
  imageStyle: {
    resizeMode: 'repeat',
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    color: FOOTER_TEXT_COLOR,
  },
});
