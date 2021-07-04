import React from 'react';
import {TouchableOpacity, Platform, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {primary_font_color, button_background_color, card_background_color} from '../theme/colors';

interface Props {
  onPress: () => void;
  isFavorite: boolean;
  style: object;
}

const FavoriteButton = ({onPress, isFavorite, style}: Props) => {
  return (
    <TouchableOpacity
      style={style ? [style, styles.container] : styles.container}
      onPress={onPress}>
      <Icon
        name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-heart${
          !isFavorite ? '-outline' : ''
        }`}
        size={24}
        color={isFavorite ? button_background_color : primary_font_color }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 5,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: card_background_color
  },
});

export default FavoriteButton;
