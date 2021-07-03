import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {LaunchContext} from '../contexts/launchContext';
import Launch from '../interfaces/Launch';
import LaunchItem from './launchItem';
import AppHeader from './appHeader';
import AppFooter from './appFooter';
import {main_background_color} from '../theme/colors';
const LaunchList = () => {
  const {launches} = useContext(LaunchContext);

  function renderItem({item}: {item: Launch}) {
    return <LaunchItem launch={item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<AppHeader />}
        ListFooterComponent={<AppFooter />}
        data={launches}
        renderItem={renderItem}
        keyExtractor={item => `${item.launch_date_local}${item.mission_name}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: main_background_color
    }
});

export default LaunchList;
