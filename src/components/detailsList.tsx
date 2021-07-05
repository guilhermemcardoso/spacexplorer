import React from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';
import ImageCard from './imageCard';
import Launch from '../interfaces/launch';
import DetailsHeader from './detailsHeader';
import {card_background_color, primary_font_color} from '../theme/colors';
import {
  border_radius_small,
  margin,
  margin_large,
  padding,
} from '../theme/dimens';

interface Props {
  launch: Launch | undefined;
}

const DetailsList = ({launch}: Props) => {
  function renderItem({item, index}: {item: string; index: number}) {
    return (
      <ImageCard
        hasPadding={
          index % 2 === 0 &&
          index < (launch?.links?.flickr_images.length || 0) - 1
        }
        roundedBottomBorders={true}
        url={item}
      />
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
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={
        <Text style={styles.emptyList}>No images available</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    margin: margin,
    padding: padding,
    backgroundColor: card_background_color,
    borderRadius: border_radius_small,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },

  listContainer: {
    marginBottom: margin_large,
    paddingBottom: padding * 2,
  },

  emptyList: {
    fontStyle: 'italic',
    color: primary_font_color,
    textAlign: 'center',
    padding: padding,
    opacity: 0.7,
  },
});

export default DetailsList;
