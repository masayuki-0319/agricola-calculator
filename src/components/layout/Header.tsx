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
    height: 130,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  backgroundImageStyle: {
    resizeMode: 'repeat',
  },
  imageStyle: {
    height: 110,
    flexGrow: 1,
  },
});
