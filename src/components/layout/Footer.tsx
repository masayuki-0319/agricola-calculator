import * as React from 'react';

import { Text, Box, Center } from 'native-base';
import { ImageBackground } from 'react-native';

import { ProductImage } from '../../assets';

type Props = {};

export const Footer: React.FC<Props> = () => {
  return (
    <Box flex={1} safeAreaTop>
      <ImageBackground
        source={{ uri: ProductImage.FooterBackground }}
        style={{ width: '100%', height: 100 }}
        imageStyle={{ resizeMode: 'repeat' }}
      >
        <Center>
          <Text fontSize={20} color={'white'}>
            Footer
          </Text>
        </Center>
      </ImageBackground>
    </Box>
  );
};
