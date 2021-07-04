import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import ImageCard from './imageCard';
import Launch from '../interfaces/launch';
import DetailsHeader from './detailsHeader';
import AppFooter from './appFooter';
import { primary_font_color } from '../theme/colors';
import { padding } from '../theme/dimens';

interface Props {
  launch: Launch | undefined;
}

const DetailsList = ({launch}: Props) => {
  function renderItem({item}: {item: string}) {

    return (
      <ImageCard hasPadding={true} roundedBottomBorders={true} url={item} />
    );
  }

  return (
    <FlatList
      ListHeaderComponent={
        <DetailsHeader
          rocketName={launch?.rocket?.rocket_name || ''}
          missionName={launch?.mission_name || ''}
          launchDate={launch?.launch_date_local || ''}
          articleLink={launch?.links.article_link || ''}
        />
      }
      style={styles.list}
      data={launch?.links.flickr_images || []}
      renderItem={renderItem}
      keyExtractor={item => item}
      numColumns={2}
      contentContainerStyle={{ paddingBottom: padding }}
      ListEmptyComponent={<Text style={styles.emptyList}>No images available</Text>}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: padding,
  },

  emptyList: {
    fontStyle: 'italic',
    color: primary_font_color,
    textAlign: 'center',
    padding: padding,
    opacity: 0.7
  }
});

export default DetailsList;
