import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {LaunchContext} from '../contexts/launchContext';
import Launch from '../interfaces/Launch';
import LaunchItem from './launchItem';
import AppHeader from './appHeader';
import AppFooter from './appFooter';
import Loading from './loading';
import {main_background_color} from '../theme/colors';

const LaunchList = () => {
  const {launches, loading} = useContext(LaunchContext);

  function renderItem({item}: {item: Launch}) {
    return <LaunchItem launch={item} />;
  }

  return (
    <View>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          ListHeaderComponent={<AppHeader />}
          ListFooterComponent={<AppFooter />}
          data={launches}
          renderItem={renderItem}
          keyExtractor={item => `${item.launch_date_local}${item.mission_name}`}
          contentContainerStyle={styles.contentContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: main_background_color,
  },
});

export default LaunchList;
