/**
 * @TODO
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
import { CalculateButton } from './ui/CalculateButton';
import { InputArea } from './ui/InputArea';

type Props = {};

export const Home: React.FC<Props> = () => {
  const { resourceResult, calculateItems } = useCalculateItems();

  return (
    <View style={styles.container}>
      <View>
        <InputArea calculateItems={calculateItems} />
      </View>
      <View>
        <CalculateButton resourceResult={resourceResult} />
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
