import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import LaunchList from '../components/launchList';
import {
  main_background_color,
  status_bar_background_color,
} from '../theme/colors';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={status_bar_background_color}
      />
      <LaunchList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: main_background_color,
  },
});

export default Home;
