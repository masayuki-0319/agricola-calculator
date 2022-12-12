import * as React from 'react';

import { View } from 'react-native';

import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <View>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </View>
  );
};
