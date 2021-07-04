import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {LaunchContext} from '../contexts/launchContext';
import Launch from '../interfaces/Launch';
import ImageCard from './imageCard';
import LearnMoreButton from './learnMoreButton';
import {card_background_color, primary_font_color} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import { border_radius, margin, padding } from '../theme/dimens';

interface Props {
  launch: Launch;
}

const LaunchItem = ({launch}: Props) => {
  const {selectLaunch} = useContext(LaunchContext);
  const navigation = useNavigation();

  function getImage() {
    if (launch.links.flickr_images.length === 0) return;
    return launch.links.flickr_images[0];
  }

  function handleLearnMorePress() {
    selectLaunch(launch);
    navigation.navigate('Details', {launch});
  }

  return (
    <View style={styles.container}>
      <ImageCard url={getImage()} roundedBottomBorders={false} hasPadding={false} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.label}>Mission: </Text>
          <Text style={styles.text}>{launch.mission_name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Launch date: </Text>
          <Text style={styles.text}>
            {new Date(launch.launch_date_local).toLocaleDateString('en-US')}
          </Text>
        </View>
        <LearnMoreButton onPress={handleLearnMorePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: border_radius,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: card_background_color,
    marginTop: margin,
    marginLeft: margin,
    marginRight: margin,
  },

  content: {
    padding: padding,
  },

  row: {
    flexDirection: 'row',
  },

  label: {
    color: primary_font_color,
    fontWeight: 'bold',
  },

  text: {
    color: primary_font_color,
  },
});

export default LaunchItem;
