import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import NewSnipScreen from '../screens/NewSnipScreen';
import Replies from '../screens/Replies';
import ViewProfile from '../screens/ViewProfile';
import FollowersFollowing from '../screens/FollowersFollowing';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, cardStyle: {} }} >
      <Stack.Screen name="Root" component={BottomTabNavigator}/>
      <Stack.Screen name="NewSnip" component={NewSnipScreen} />
      <Stack.Screen name="Replies" component={Replies} />
      <Stack.Screen name="ViewProfile" component={ViewProfile} />
      <Stack.Screen name="FollowersFollowing" component={FollowersFollowing} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
