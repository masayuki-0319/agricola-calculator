import * as React from 'react';

import { View, StyleSheet } from 'react-native';

import { Spacer } from '../Spacer';
import { Typography } from '../Typography';

type Props = {
  points: number;
};

const RESOURCE_TITLE_COLOR = '#CFCBC0';
const SCORE_COLOR = 'white';
const POSITIVE_SCORE_CORE = '#1B3B53';
const NEGATIVE_SCORE_CORE = '#EF4748';

export const TitleArea: React.FC<Props> = (props) => {
  const { points } = props;

  return (
    <View style={styles.container}>
      <Typography text='Fields' style={styles.text} />
      <View style={styles.scoreArea}>
        {/**
         * @TODO
         * スコアを囲う丸が楕円のため、真円に修正すること
         */}
        <View
          style={[
            styles.scoreCircle,
            {
              backgroundColor:
                points > 0 ? POSITIVE_SCORE_CORE : NEGATIVE_SCORE_CORE,
            },
          ]}
        >
          <Typography text={points} style={styles.pointsText} />
        </View>
        <Spacer width={12} />
        <Typography text='Points' style={styles.text} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scoreArea: {
    flexDirection: 'row',
  },
  scoreCircle: {
    textAlign: 'center',
    justifyContent: 'center',
    width: 30,
    borderRadius: 50,
  },
  text: {
    color: RESOURCE_TITLE_COLOR,
  },
  pointsText: {
    color: SCORE_COLOR,
  },
});
