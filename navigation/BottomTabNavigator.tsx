import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import TabFiveScreen from '../screens/TabFiveScreen';
import { BottomTabParamList, TabOneParamList, TabThreeParamList, TabTwoParamList, TabFourParamList, TabFiveParamList } from '../types';
import { View, useWindowDimensions, TouchableOpacity, Image} from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import Slider from '@sharcoux/slider';
import SearchBar from '../components/SearchBarTest';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (

    <BottomTab.Navigator
      initialRouteName="Queue"
      tabBarOptions={{ activeTintColor: 'Colors[colorScheme].tint', 
      showLabel:false, style: {position: 'absolute', bottom: 554, borderTopWidth: 1, borderTopColor: '#ffffff', borderBottomWidth: 0.5, borderBottomColor: '#d3d3d3'} }}>
        
      <BottomTab.Screen
        name="Queue"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Image
          style={{width: 24, height: 24, tintColor: "#bababa"}}
          source={require("../assets/queue.png")}
        />,
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={17} color={'#bababa'} />,
        }}
      />
      <BottomTab.Screen
        name="Create"
        component={TabThreeNavigator}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('NewSnip'); 
          },
        })}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="plus" size={22} color={'#bababa'} />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <Image
          style={{width: 24, height: 24, tintColor: "#bababa"}}
          source={require("../assets/noti.png")}
        />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabFiveNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={17} color={'#bababa'} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{}} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator >
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          headerTitle: () => (<Image
            style={{width: 40, height: 40, padding: 5}}
            source={require("../assets/sniplet.png")}
          /> ),
          headerStyle: {borderBottomWidth: 1, borderBottomColor: '#ffffff'},
          headerRight: () => (
            <View style={{width: 170, marginRight: 20}}>
              <Slider
              value={0}
              minimumValue={0}  
              maximumValue={1}
              step={0}                          
              thumbStyle={{borderWidth: 1, borderColor: '#EEEDEC'}}            
              trackStyle={{}}            
              minTrackStyle={{borderWidth: 1, borderColor: '#EEEDEC'}}         
              maxTrackStyle={{borderWidth: 1, borderColor: '#EEEDEC'}} 
              thumbTintColor='#fdfdfd' 
              minimumTrackTintColor='#FFFFFF' 
              maximumTrackTintColor='#AEB3AC'
              enabled={true}
              trackHeight={5}                   
              thumbSize={20}                    
              slideOnTap={true}                 
              onValueChange={undefined}         
              onSlidingStart={undefined}        
              onSlidingComplete={undefined}
              ></Slider>
            </View>
        )}}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{headerStyle: {borderBottomWidth: 1, borderBottomColor: '#ffffff'}, 
        headerTitle: () => (
          <View style={{width: '100%', height: '100%'}}>
            <SearchBar></SearchBar>
          </View>
        ) }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: '', headerStyle: {borderBottomWidth: 1, borderBottomColor: '#ffffff'} }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={TabFourScreen}
        options={{headerTitle: '', headerStyle: {borderBottomWidth: 1, borderBottomColor: '#ffffff'}}}
      />
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator<TabFiveParamList>();


function TabFiveNavigator() {
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="TabFiveScreen"
        component={TabFiveScreen}
        options={{ headerTitle: '', headerStyle: {borderBottomWidth: 1, borderBottomColor: '#ffffff'} }}
      />
    </TabFiveStack.Navigator>
  );
}
