import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import LessonScreen from '../screens/LessonScreen';
import CreateScreen from '../screens/CreateScreen';
import SettingScreen from '../screens/SettingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyLessonScreen from '../screens/MyLessonScreen';
import BrowserScreen from '../screens/BrowserScreen';
import LogoutScreen from '../screens/LogoutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Lesson" component={LessonScreen} />
    </Stack.Navigator>
  )
}

const SettingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MyLesson" component={MyLessonScreen} />
      <Stack.Screen name="Browser" component={BrowserScreen} />
      <Stack.Screen name="Logout" component={LogoutScreen} />
    </Stack.Navigator>
  )
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#EB5D00',
        inactiveTintColor: '#333',
        activeBackgroundColor: '#EEDCB3',
      }}>
        <Tab.Screen name="Home" component={HomeStack} options={{
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? require('../src/img/home-active.png') : require('../src/img/home.png')} style={{ width: 20, height: 20 }} />
          ),
        }} />
        <Tab.Screen name="Create" component={CreateScreen} options={{
          tabBarLabel: 'レッスン作成',
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? require('../src/img/pen-active.png') : require('../src/img/pen.png')} style={{ width: 20, height: 20 }} />
          ),
        }} />
        <Tab.Screen name="Setting" component={SettingStack} options={{
          tabBarLabel: 'その他',
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? require('../src/img/head-active.png') : require('../src/img/head.png')} style={{ width: 20, height: 20 }} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
