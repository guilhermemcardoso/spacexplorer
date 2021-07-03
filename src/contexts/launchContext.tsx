import React, {createContext, useState, ReactNode, useEffect} from 'react';
import {ApolloProvider} from '@apollo/client';
import client from '../services/spacex';
import {gql} from '@apollo/client';
import Launch from '../interfaces/launch'

interface LaunchContextData {
  launches: Array<Launch>;
  currentLaunch: Launch | undefined;
  loading: boolean;
  selectLaunch: (launch: Launch) => void;
  addToFavorites: (img: string) => void;
  removeFromFavorites: (img: string) => void;
  isFavorite: (img: string) => boolean;
}

interface LaunchProviderProps {
  children: ReactNode;
}

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

export const LaunchContext = createContext({} as LaunchContextData);

export function LaunchProvider({children, ...rest}: LaunchProviderProps) {
  const [loading, setLoading] = useState(true);
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [currentLaunch, setCurrentLaunch] = useState<Launch | undefined>(
    undefined,
  );
  const [favorites, setFavorites] = useState<string[]>([]);

  function selectLaunch(launch: Launch) {
    setCurrentLaunch(launch);
  }

  function addToFavorites(img: string) {
    const favoriteList = [...favorites];
    favoriteList.push(img);
    setFavorites(favoriteList);
  }

  function removeFromFavorites(img: string) {
    const favoriteList = favorites.filter(favorite => favorite !== img);
    setFavorites(favoriteList);
  }

  function isFavorite(img: string) {
    const isFavorite = favorites.find(favorite => favorite === img);
    return !!isFavorite;
  }

  function sortLaunches(launches: Launch[]): Launch[] {
    const sortedLaunches = launches.sort((a: Launch, b: Launch) => {
      if (a.launch_date_local > b.launch_date_local) {
        return 1;
      }
      if (a.launch_date_local < b.launch_date_local) {
        return -1;
      }

      return 0;
    });

    return sortedLaunches;
  }

  useEffect(() => {
    async function getLaunches() {
      setLoading(true);
      const {data, loading} = await client.query({
        query: GET_LAUNCHES,
      });
      setLoading(loading);
      const launchList = [...data.launchesPast];
      const sortedLaunches = sortLaunches(launchList);
      setLaunches(sortedLaunches);
    }

    getLaunches();
  }, []);

  return (
    <ApolloProvider client={client}>
      <LaunchContext.Provider
        value={{
          launches,
          currentLaunch,
          selectLaunch,
          loading,
          addToFavorites,
          removeFromFavorites,
          isFavorite,
        }}>
        {children}
      </LaunchContext.Provider>
    </ApolloProvider>
  );
}
