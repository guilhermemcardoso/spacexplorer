import React, {useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {LaunchContext} from '../contexts/launchContext';
import { border_radius, padding_small } from '../theme/dimens';
import FavoriteButton from './favoriteButton';

interface Props {
  url: string | undefined;
  roundedBottomBorders: boolean;
  hasPadding: boolean;
}

const ImageCard = ({url, roundedBottomBorders, hasPadding}: Props) => {
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

  const styles = StyleSheet.create({
    card: {
      borderTopLeftRadius: border_radius,
      borderTopRightRadius: border_radius,
      borderBottomLeftRadius: roundedBottomBorders ? border_radius : 0,
      borderBottomRightRadius: roundedBottomBorders ? border_radius : 0,
      padding: hasPadding ? padding_small : 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
  
    image: {
      height: 300,
      flex: 1,
      borderTopLeftRadius: border_radius,
      borderTopRightRadius: border_radius,
      borderBottomLeftRadius: roundedBottomBorders ? border_radius : 0,
      borderBottomRightRadius: roundedBottomBorders ? border_radius : 0,
      justifyContent: 'center',
      resizeMode: 'cover',
    },
  
    favoriteButton: {
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
  });

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

export default ImageCard;
