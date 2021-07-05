import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Router from './router';
import {LaunchProvider} from './contexts/launchContext';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <LaunchProvider>
      <Router />
    </LaunchProvider>
  );
};

export default App;
