import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {button_background_color, card_background_color} from '../theme/colors';
const LearnMoreButton = () => {

  function handlePress() {

  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}>
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
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: button_background_color,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },

  label: {
    color: card_background_color
  }
});

export default LearnMoreButton;
