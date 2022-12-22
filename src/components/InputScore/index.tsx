/**
 * @TODO
 * - 各スコアを計算可能にできるよう共通コンポーネント化
 */
import React from 'react';

import { View, StyleSheet, ImageBackground } from 'react-native';

import { ScoreResourceImage } from '../../assets';
import { calculateField } from '../../hooks/agricola-score-calculator/src';

import { InputArea } from './InputArea';
import { TitleArea } from './TitleArea';

type Props = {
  resourceTitle?: string;
  resourceImage?: string;
  resourceResult?: number;
  onChangeResourceResult?: () => void;
  calculateScore?: () => number;
};

export const InputScore: React.FC<Props> = (props) => {
  // const {} = props;

  const resourceTitle = 'Fields';
  const resourceImage = ScoreResourceImage.Fields;
  const calculateScore = React.useCallback(calculateField, []);
  const [resourceResult, setResourceResult] = React.useState(0);

  return (
    <View>
      <View style={styles.resourceImageArea}>
        <ImageBackground
          source={{
            uri: resourceImage,
          }}
          style={styles.imageArea}
          imageStyle={styles.imageStyle}
        >
          <View style={styles.imageFooterArea}>
            <View style={styles.titleArea}>
              <TitleArea
                resourceTitle={resourceTitle}
                score={calculateScore(resourceResult)}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View>
        <InputArea
          resourceResult={resourceResult}
          setResourceResult={setResourceResult}
        />
      </View>
    </View>
  );
};

const TITLE_AREA_COLOR = 'rgba(0, 0, 0, 0.5)';

const styles = StyleSheet.create({
  resourceImageArea: {
    flexDirection: 'row',
  },
  imageArea: {
    width: 360,
    height: 150,
  },
  imageStyle: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  imageFooterArea: {
    width: 360,
    height: 50,
    position: 'absolute',
    bottom: 0,
  },
  titleArea: {
    backgroundColor: TITLE_AREA_COLOR,
  },
});
