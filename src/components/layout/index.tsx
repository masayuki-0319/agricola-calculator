import * as React from 'react';

import { Box } from 'native-base';

import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <Box>
      <Header />
      <Body>
        {children}
        <Footer />
      </Body>
    </Box>
  );
};
