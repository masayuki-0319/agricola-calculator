import * as React from 'react';

import { Box } from 'native-base';

type Props = {
  children: React.ReactNode;
};

export const Body: React.FC<Props> = (props) => {
  const { children } = props;

  return <Box backgroundColor={'yellow.100'}>{children}</Box>;
};
