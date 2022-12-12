import * as React from 'react';

import { Text, View, ImageBackground, StyleSheet } from 'react-native';

import { ProductImage } from '../../assets';

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
        style={styles.backgroujndImage}
        imageStyle={{ resizeMode: 'repeat' }}
      >
        <View>
          <Text style={styles.text}>Footer</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  backgroujndImage: {
    width: '100%',
    height: 100,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});
