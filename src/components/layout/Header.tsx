import * as React from 'react';

import { View, Image, ImageBackground, StyleSheet } from 'react-native';

import { ProductImage } from '../../assets';

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <View>
      <ImageBackground
        source={{ uri: ProductImage.HeaderBackground }}
        style={styles.backgroundImage}
        imageStyle={{ resizeMode: 'repeat' }}
      >
        <Image
          source={{ uri: ProductImage.HeaderTitle }}
          resizeMode='contain'
          style={{
            height: 110,
            justifyContent: 'center',
          }}
        />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    height: 150,
  },
});
