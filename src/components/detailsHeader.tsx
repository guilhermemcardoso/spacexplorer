import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
import {primary_font_color} from '../theme/colors';
import {details_font_size, margin} from '../theme/dimens';

interface Props {
  rocketName: string;
  missionName: string;
  launchDate: string;
  articleLink: string;
}

const DetailsHeader = ({
  rocketName,
  missionName,
  launchDate,
  articleLink,
}: Props) => {
  function handleLinkPress() {
    Linking.openURL(articleLink);
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>Rocket:</Text>
        <Text style={styles.text}>{rocketName}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Mission:</Text>
        <Text style={styles.text}>{missionName}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Launch date: </Text>
        <Text style={styles.text}>
          {new Date(launchDate).toLocaleDateString('en-US')}
        </Text>
      </View>
      {articleLink.length > 0 && (
        <View style={styles.item}>
          <Text style={styles.label}>Article:</Text>
          <TouchableOpacity onPress={handleLinkPress}>
            <Text style={styles.text}>{articleLink}</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.item}>
        <Text style={styles.label}>Gallery:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  item: {
    justifyContent: 'center',
    marginBottom: margin,
  },

  label: {
    color: primary_font_color,
    fontWeight: 'bold',
    fontSize: details_font_size,
  },

  text: {
    color: primary_font_color,
    fontSize: details_font_size,
  },
});

export default DetailsHeader;
