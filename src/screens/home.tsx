import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import Icon from 'react-native-vector-icons/Ionicons';

const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
`;

interface Launch {
  mission_name: string;
  launch_date_local: string;
  launch_site: {
    site_name_long: string;
  };
  links: {
    article_link: string;
    flickr_images: Array<string>;
  };
  rocket: {
    rocket_name: string;
  };
}

interface PastLaunchesData {
  launchesPast: Array<Launch>;
}

const Home = () => {
  const {networkStatus, loading, data} =
    useQuery<PastLaunchesData>(GET_LAUNCHES);

  return (
    <SafeAreaView>
      <Icon name="ios-person" size={30} color="#4F8EF7" />
      {loading ? (
        <Text>Loading ...</Text>
      ) : (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {data?.launchesPast.map(({mission_name, links}) => (
            <View key={mission_name}>
              <Text>{mission_name}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Home;
