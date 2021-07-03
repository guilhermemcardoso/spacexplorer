import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import FavoriteButton from '../components/favoriteButton';
import {LaunchContext} from '../contexts/launchContext';

const Home = () => {
  const {loading, launches, addToFavorites, removeFromFavorites, isFavorite} =
    useContext(LaunchContext);

  function handlePress(name: string) {
    console.log('handlePress', name);
    if (isFavorite(name)) {
      removeFromFavorites(name);
    } else {
      addToFavorites(name);
    }
  }

  function checkIfFavorite(name: string) {
    return isFavorite(name);
  }

  return (
    <SafeAreaView>
      <FavoriteButton onPress={() => console.log('teste')} isFavorite={true} />
      {loading ? (
        <Text>Loading ...</Text>
      ) : (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {launches.map(({mission_name, links}) => (
            <View key={mission_name}>
              <TouchableOpacity
                style={{padding: 10}}
                onPress={() => handlePress(mission_name)}>
                <Text
                  style={{
                    color: checkIfFavorite(mission_name)
                      ? '#FF0000'
                      : '#000000',
                  }}>
                  {mission_name}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Home;
