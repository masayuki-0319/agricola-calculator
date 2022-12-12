import React from 'react';

import { Layout } from './components';
import { Home } from './screens/Home';

const App: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
