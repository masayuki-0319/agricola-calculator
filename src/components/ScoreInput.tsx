import React from 'react';

import { Box, HStack, Image, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';

import { ScoreResourceImage } from '../assets';

export const ScoreInput: React.FC = () => {
  return (
    <Box alignItems='center'>
      <Box
        maxWidth={400}
        rounded='lg'
        overflow='hidden'
        borderColor='coolGray.200'
        borderWidth='1'
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
      >
        <Box style={{ width: 400, height: 250 }}>
          <View>
            <Image
              source={{
                uri: ScoreResourceImage.Fields,
              }}
              width={400}
              height={200}
            />
          </View>
          <View>
            <HStack
              bg='warmGray.100'
              bottom='0'
              px='3'
              py='1.5'
              justifyContent={'space-between'}
            >
              <Text fontSize={20}>Fields</Text>
              <Text fontSize={20}>4 Points</Text>
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

  // return (
  //   <View style={styles.scoreContainer}>
  //     <Image src={ScoreResourceImage.Fields} style={styles.image} />
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         justifyContent: 'space-between',
  //       }}
  //     >
  //       <Text>Fields</Text>
  //       <Text>4 Points</Text>
  //     </View>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  scoreContainer: {
    width: 470,
    height: 500,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  scoreText: {
    fontSize: 20,
  },
});
