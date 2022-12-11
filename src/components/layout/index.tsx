import * as React from 'react';

import { AspectRatio, Box, Center, Image, Text } from 'native-base';
import { ImageBackground } from 'react-native';

import { ProductImage } from '../../assets';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <Box>
      <Box>
        <ImageBackground
          source={{ uri: ProductImage.HeaderBackground }}
          style={{ width: '100%', height: 200 }}
          imageStyle={{ resizeMode: 'repeat' }}
        >
          <Center>
            <AspectRatio
              ratio={{
                base: 10 / 3,
              }}
              width={{
                base: '500',
              }}
              height={{
                base: '150',
              }}
            >
              <Image src={ProductImage.HeaderTitle} resizeMode='contain' />
            </AspectRatio>
            <Text fontSize={20} color={'warmGray.500'}>
              Score Calculator
            </Text>
          </Center>
        </ImageBackground>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};
