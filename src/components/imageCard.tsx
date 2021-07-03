import React, {useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {LaunchContext} from '../contexts/launchContext';
import FavoriteButton from './favoriteButton';

interface Props {
  url: string | undefined;
}

const ImageCard = ({url}: Props) => {
  const {isFavorite, addToFavorites, removeFromFavorites} =
    useContext(LaunchContext);

  function handleOnImagePress() {
    if (!url) return;
    if (isFavorite(url)) {
      removeFromFavorites(url);
      return;
    }

    addToFavorites(url);
  }

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={url ? {uri: url} : require('../assets/no_image_available.jpg')}
      />
      {url && (
        <FavoriteButton
          style={styles.favoriteButton}
          onPress={handleOnImagePress}
          isFavorite={url ? isFavorite(url) : false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  image: {
    height: 300,
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    resizeMode: 'cover',
  },

  favoriteButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default ImageCard;
