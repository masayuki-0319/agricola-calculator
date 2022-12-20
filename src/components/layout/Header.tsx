import * as React from 'react';

import { View, Image, ImageBackground, StyleSheet } from 'react-native';

import { ProductImage } from '../../assets';

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <View>
      <ImageBackground
        source={{ uri: ProductImage.HeaderBackground }}
        style={styles.backgroundImageArea}
        imageStyle={styles.backgroundImageStyle}
      >
        <Image
          source={{ uri: ProductImage.HeaderTitle }}
          resizeMode='contain'
          style={styles.imageStyle}
        />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundImageArea: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backgroundImageStyle: {
    resizeMode: 'repeat',
  },
  imageStyle: {
    height: 100,
    flexGrow: 1,
  },
});
