/**
 * @TODO
 * # (1) リファクタリング・未実装箇所
 * - Footer に対して、オリジナルの URL を表示する
 *
 * # (2) 全ての計算結果の合計値を表示する
 * - Figma で、ボタンとモーダル表示をデザインする
 * - 画面の最下部に対して、計算ボタンを設置する
 * - ボタン押下でモーダルを表示させる
 * - モーダルに対して、入力データに基づく計算結果を表示する
 *
 * # (3) Web に公開する
 * - GitHub Pages で公開する
 *
 * # 修正案
 * - レイヤの追加を検討する
 *   - room 特有処理の問題を解決する
 *   - アーキテクチャは MVVM ？
 */
import * as React from 'react';

import { View, StyleSheet } from 'react-native';

import { Spacer } from '../components';
import { InputScore } from '../components/InputScore';

import { useCalculateItems } from './hooks';

type Props = {};

export const Home: React.FC<Props> = () => {
  const { calculateItems } = useCalculateItems();

  const renderInputScores = (): React.ReactNode => {
    return calculateItems.map((calculateItem, index) => {
      const {
        resourceTitle,
        resourceImage,
        resourceTitleResult,
        setResourceResult,
        calculateScore,
      } = calculateItem;

      return (
        <View key={index}>
          <InputScore
            resourceTitle={resourceTitle}
            resourceImage={resourceImage}
            resourceResult={resourceTitleResult}
            onChangeResourceResult={setResourceResult}
            calculateScore={calculateScore}
          />
          <Spacer height={30} />
        </View>
      );
    });
  };

  return <View style={styles.container}>{renderInputScores()}</View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
  },
});
