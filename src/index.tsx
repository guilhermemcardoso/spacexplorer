import 'react-native-gesture-handler';
import React from 'react';
import Router from './router';
import {LaunchProvider} from './contexts/launchContext';

const App = () => {
  return (
    <LaunchProvider>
      <Router />
    </LaunchProvider>
  );
};

export default App;
