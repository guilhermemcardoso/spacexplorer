import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {margin_large, padding, footer_font_size} from '../theme/dimens';

const AppFooter = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developed by Guilherme Cardoso</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: padding,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
      marginTop: margin_large,
      fontSize: footer_font_size
  }
});

export default AppFooter;
