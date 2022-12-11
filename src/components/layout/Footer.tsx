import * as React from 'react';

import { Text, Box, Center } from 'native-base';
import { ImageBackground } from 'react-native';

import { ProductImage } from '../../assets';

type Props = {};

/**
 * @FIXME
 * Footer を画面の最下部に接地させること
 * @See https://scrapbox.io/momomo/ReactNative_%E3%81%A7%E7%94%BB%E5%83%8F%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B
 */
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
