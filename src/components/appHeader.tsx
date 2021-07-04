import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {primary_font_color} from '../theme/colors';
import {margin_extra_large, margin_large, padding_large, title_font_size} from '../theme/dimens';

const AppHeader = () => {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/rocket.png')} />
      <Text style={styles.title}>SpaceXplorer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: padding_large,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    marginTop: margin_extra_large,
    height: 100,
    width: 100
  },

  title: {
      marginTop: margin_large,
      fontSize: title_font_size,
      fontWeight: 'bold',
      color: primary_font_color
  }
});

export default AppHeader;
