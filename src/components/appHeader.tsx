import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {primary_font_color} from '../theme/colors';
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
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    marginTop: 20,
    height: 100,
    width: 100
  },

  title: {
      marginTop: 16,
      fontSize: 28,
      fontWeight: 'bold',
      color: primary_font_color
  }
});

export default AppHeader;
