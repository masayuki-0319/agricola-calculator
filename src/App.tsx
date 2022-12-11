import React from 'react';

import { NativeBaseProvider } from 'native-base';

import { Layout } from './components';
import { Home } from './screens/Home';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <Layout>
        <Home />
      </Layout>
    </NativeBaseProvider>
  );
};

export default App;
