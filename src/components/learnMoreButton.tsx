import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { useContext } from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { LaunchContext } from '../contexts/launchContext';
import {button_background_color, card_background_color} from '../theme/colors';
import { border_radius_small, margin, padding, padding_small } from '../theme/dimens';

interface Props {
  onPress: () => void;
}

const LearnMoreButton = ({onPress}: Props) => {
  const navigation = useNavigation();
  const {selectLaunch} = useContext(LaunchContext);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>LEARN MORE</Text>
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
    borderRadius: border_radius_small,
    paddingHorizontal: padding,
    paddingVertical: padding_small,
    backgroundColor: button_background_color,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: margin,
  },

  label: {
    color: card_background_color,
  },
});

export default LearnMoreButton;
