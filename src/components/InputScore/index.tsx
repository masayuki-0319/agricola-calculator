/**
 * @TODO
 * - 各スコアを計算可能にできるよう共通コンポーネント化
 */
import React from 'react';

import { View, StyleSheet, ImageBackground } from 'react-native';

import { ScoreResource } from '../../hooks/agricola-score-calculator/src';

import { InputArea } from './InputArea';
import { RoomTitleArea } from './RoomTitleArea';
import { TitleArea } from './TitleArea';

export type InputScoreProps = {
  resourceTitle: string;
  resourceImage: string;
  resourceResult: number | ScoreResource['farmFacility']['room'];
  onChangeResourceResult: Function;
  calculateScore: Function;
};

export const InputScore: React.FC<InputScoreProps> = (props) => {
  const {
    resourceTitle,
    resourceImage,
    resourceResult,
    onChangeResourceResult,
    calculateScore,
  } = props;

  const isRoom = typeof resourceResult !== 'number';

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
              {isRoom ? (
                <RoomTitleArea
                  resourceTitle={resourceTitle}
                  resourceResult={resourceResult}
                  calculateScore={calculateScore}
                />
              ) : (
                <TitleArea
                  resourceTitle={resourceTitle}
                  resourceResult={resourceResult}
                  calculateScore={calculateScore}
                />
              )}
            </View>
          </View>
        </ImageBackground>
      </View>
      <View>
        {/**
         * @FIXME
         * CrayRoom と StonesRoom の入力方法を模索
         * - ユーザが room.type の入力を切り替える
         * - roomt.type 切り替え後、 resourceResult を更新する
         * - room.type に応じた入力 UI を表示する
         */}
        {isRoom ? null : (
          <InputArea
            resourceResult={resourceResult}
            setResourceResult={onChangeResourceResult}
          />
        )}
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
