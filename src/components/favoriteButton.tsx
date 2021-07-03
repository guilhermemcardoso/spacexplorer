import React from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  onPress: () => void;
  isFavorite: boolean;
}

const FavoriteButton = ({onPress, isFavorite}: Props) => {
  return (
    <TouchableOpacity>
      <Icon
        name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-heart${
          !isFavorite ? '-outline' : ''
        }`}
        size={30}
        color={isFavorite ? '#FF0000' : '#000000'}
      />
    </TouchableOpacity>
  );
};

export default FavoriteButton;
