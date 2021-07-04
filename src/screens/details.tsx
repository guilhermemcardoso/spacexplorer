import React from 'react';
import {useContext} from 'react';
import {LaunchContext} from '../contexts/launchContext';
import DetailsList from '../components/detailsList';

const Details = () => {
  const {currentLaunch} = useContext(LaunchContext);

  return (
    <DetailsList launch={currentLaunch} />
  );
};

export default Details;
