/**
 * @TODO
 * # (2) 全ての計算結果の合計値を表示する
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

import { useCalculateItems } from './hooks';
import { InputArea } from './ui/InputArea';

type Props = {};

export const Home: React.FC<Props> = () => {
  const { calculateItems } = useCalculateItems();

  return (
    <View style={styles.container}>
      <View>
        <InputArea calculateItems={calculateItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
  },
});
