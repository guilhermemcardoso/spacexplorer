import React from 'react';
import {SafeAreaView, Text, StyleSheet, ActivityIndicator} from 'react-native';
import { main_background_color, primary_font_color } from '../theme/colors';
import {margin_large, padding, footer_font_size} from '../theme/dimens';

const Loading = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color={primary_font_color} />
      <Text style={styles.title}>Loading...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: padding,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: main_background_color,
    height: '100%'
  },

  title: {
      marginTop: margin_large,
      fontSize: footer_font_size,
      color: primary_font_color
  }
});

export default Loading;
