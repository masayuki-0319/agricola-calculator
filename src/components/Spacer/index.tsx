import React from 'react';

import { View } from 'react-native';

export type SpacerProps = {
  width?: number | string;
  height?: number | string;
};

export const Spacer: React.FC<SpacerProps> = (props) => {
  const { width, height } = props;

  return <View style={{ marginLeft: width, marginTop: height }} />;
};
