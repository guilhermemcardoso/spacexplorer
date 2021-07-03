import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const AppFooter = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developed by Guilherme Cardoso</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
      marginTop: 16,
      fontSize: 12
  }
});

export default AppFooter;
