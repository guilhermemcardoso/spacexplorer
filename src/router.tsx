import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {button_background_color, card_background_color} from './theme/colors';

import HomeScreen from './screens/home';
import DetailsScreen from './screens/details';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Launch Details',
            headerStyle: {
              backgroundColor: button_background_color,
            },
            headerTintColor: card_background_color,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
