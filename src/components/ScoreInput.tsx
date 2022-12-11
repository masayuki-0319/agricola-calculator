import React from 'react';

import { View, Box, HStack, Image, Spacer, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import { ScoreResourceImage } from '../assets';

export const ScoreInput: React.FC = () => {
  const points = 4;

  return (
    <Box alignItems='center'>
      <Box
        maxWidth={470}
        rounded='lg'
        overflow='hidden'
        borderColor='coolGray.200'
        borderWidth='1'
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
      >
        <Box style={{ width: 470, height: 250 }}>
          <View>
            <Image
              source={{
                uri: ScoreResourceImage.Fields,
              }}
              width={470}
              height={200}
              resizeMode='contain'
            />
          </View>
          <View>
            <HStack
              bg='warmGray.200'
              paddingX={4}
              justifyContent={'space-between'}
            >
              <Text fontSize={20}>Fields</Text>
              <HStack>
                <View
                  textAlign='center'
                  width={8}
                  borderRadius={'50%'}
                  backgroundColor={points > 0 ? 'blue.500' : 'red.500'}
                >
                  <Text fontSize={20} color='white'>
                    {points}
                  </Text>
                </View>
                <Spacer width={2} />
                <Text fontSize={20}>Points</Text>
              </HStack>
            </HStack>
          </View>
        </Box>
        <Box>
          <HStack>
            <Text fontWeight='bold' overflow={'auto'}>
              DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription..............
            </Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({});
