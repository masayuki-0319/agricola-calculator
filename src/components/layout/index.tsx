import * as React from 'react';

import { Box } from 'native-base';

import { Header } from './Header';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <Box>
      <Header />
      <Box>{children}</Box>
    </Box>
  );
};
