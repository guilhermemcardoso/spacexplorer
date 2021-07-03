import React from 'react';
import Home from './screens/home';
import {LaunchProvider} from './contexts/launchContext';

const App = () => {
  return (
    <LaunchProvider>
      <Home />
    </LaunchProvider>
  );
};

export default App;
