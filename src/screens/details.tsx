import React, {useContext} from 'react';
import { SafeAreaView } from 'react-native';
import {LaunchContext} from '../contexts/launchContext';
import DetailsList from '../components/detailsList';
import { StyleSheet } from 'react-native';
import { main_background_color } from '../theme/colors';

const Details = () => {
  const {currentLaunch} = useContext(LaunchContext);

  return (
    <SafeAreaView style={styles.container}>
      <DetailsList launch={currentLaunch} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: main_background_color,
    flex: 1
  }
})

export default Details;
